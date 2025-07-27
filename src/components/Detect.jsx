import { useState, useRef, useEffect, useCallback } from "react";
import { FilesetResolver, GestureRecognizer } from "@mediapipe/tasks-vision";
import Webcam from "react-webcam";
import ProgressBar from "./ProgressBar";

const Detect = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const requestRef = useRef();
  const [gestureRecognizer, setGestureRecognizer] = useState(null);
  const [runningMode, setRunningMode] = useState("IMAGE");
  const [gestureOutput, setGestureOutput] = useState("");
  const [progress, setProgress] = useState(0);
  const [webcamRunning, setWebcamRunning] = useState(false);

  const predictWebcam = useCallback(() => {
    if (runningMode === "IMAGE") {
      setRunningMode("VIDEO");
      gestureRecognizer.setOptions({ runningMode: "VIDEO" });
    }

    const nowInMs = Date.now();
    const results = gestureRecognizer.recognizeForVideo(
      webcamRef.current.video,
      nowInMs
    );

    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    // Clear canvas (even if unused, to keep code stable)
    const canvasCtx = canvasRef.current.getContext("2d");
    canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    if (results.gestures.length > 0) {
      setGestureOutput(results.gestures[0][0].categoryName);
      setProgress(Math.round(parseFloat(results.gestures[0][0].score) * 100));
    } else {
      setGestureOutput("");
      setProgress(0);
    }

    if (webcamRunning) {
      requestRef.current = requestAnimationFrame(predictWebcam);
    }
  }, [webcamRunning, runningMode, gestureRecognizer]);

  const animate = useCallback(() => {
    requestRef.current = requestAnimationFrame(animate);
    predictWebcam();
  }, [predictWebcam]);

  const enableCam = useCallback(() => {
    if (!gestureRecognizer) {
      alert("Please wait for gestureRecognizer to load");
      return;
    }

    if (webcamRunning) {
      setWebcamRunning(false);
      cancelAnimationFrame(requestRef.current);
    } else {
      setWebcamRunning(true);
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [webcamRunning, gestureRecognizer, animate]);

  useEffect(() => {
    const loadGestureRecognizer = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
      );
      const recognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "/model/gesture_recognizer.task",
        },
        numHands: 2,
        runningMode,
      });
      setGestureRecognizer(recognizer);
    };
    loadGestureRecognizer();
  }, [runningMode]);

  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center gap-4 p-4">
      <div className="relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          className="w-[600px] h-[500px] max-w-full z-10"
        />
        <canvas
          ref={canvasRef}
          className="absolute left-0 top-0 w-[600px] h-[500px] max-w-full z-10"
        />
        <div className="flex flex-col justify-center items-center text-center mt-4 gap-4">
          <button
            onClick={enableCam}
            className="w-[100px] h-[30px] text-[20px] font-medium text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg"
          >
            {webcamRunning ? "Stop" : "Start"}
          </button>

          <div className="w-full flex items-center justify-center px-4 gap-4">
            <p className="text-[20px] text-green-600 w-1/5 text-left font-semibold">
              {gestureOutput}
            </p>
            {progress ? <ProgressBar progress={progress} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detect;
