const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-green-300 rounded-lg transition-all duration-500 ease-in-out">
      <div
        className="h-5 bg-green-600 text-white font-bold rounded-lg text-center"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  )
}

export default ProgressBar
