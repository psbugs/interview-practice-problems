import { useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(10);

  const handleClick = (operation: '+' | '-') => {
    if (operation === '+') {
      setPercentage(prev => Math.min(100, createIncrementDecrement(prev).increment()));
    } else {
      setPercentage(prev => Math.max(0, createIncrementDecrement(prev).decrement()));
    }
  };

  function createIncrementDecrement(current: number) {
    let counter = current;
    return {
      increment: () => counter + 10,
      decrement: () => counter - 10,
    };
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-200 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-700">Progress Bar Challenge</h1>

        {/* Progress bar container */}
        <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300 ease-in-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="text-gray-600 text-sm font-medium">
          {percentage}% Complete
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleClick('+')}
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
          >
            +10%
          </button>
          <button
            onClick={() => handleClick('-')}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition"
          >
            -10%
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;