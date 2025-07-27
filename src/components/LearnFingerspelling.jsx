import { useState } from "react";

const LearnFingerspelling = () => {
  const [input, setInput] = useState("");
  const [words, setWords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanedWords = input
      .toLowerCase()
      .split(" ")
      .map((word) => word.replace(/[^a-z]/g, "").split(""));

    setWords(cleanedWords);
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center pt-10 px-4 pb-15">
      <h1 className="text-3xl font-bold text-white mb-6">Learn Fingerspelling</h1>

      <form onSubmit={handleSubmit} className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Type a word..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Spell
        </button>
      </form>

      {/* Scrollable area on mobile */}
      <div className="flex flex-col gap-6 items-center w-full sm:max-h-none max-h-[60vh] overflow-y-auto px-2">
        {words.map((wordLetters, wordIdx) => (
          <div
            key={wordIdx}
            className="flex flex-wrap justify-center gap-6 sm:flex-row flex-col"
          >
            {wordLetters.map((letter, idx) => (
              <div
                key={idx}
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-400 p-3 flex flex-col items-center w-32"
              >
                <img
                  src={`/sign/${letter}.jpeg`}
                  alt={letter}
                  className="h-28 w-32 rounded-lg mb-2"
                />
                <span className="capitalize text-lg font-semibold">{letter}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnFingerspelling;
