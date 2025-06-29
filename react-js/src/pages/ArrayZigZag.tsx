import React, { useState } from "react";

const ArrayZigZag = () => {
  const [enteredString, setEnteredString] = useState('');
  const [outStr, setOutputStr] = useState('');

  const handleStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredString(e.target.value);
  };

  const handleSubmitOutputConverter = () => {
    if (enteredString !== '') {
      const strArr = enteredString.split(',');
      const strArrOut: string[] = [];

      for (let i = 0; i < strArr.length; i++) {
        if ((i + 1) % 2 === 0) {
          strArrOut.push(strArr[i].split('').reverse().join(''));
        } else {
          strArrOut.push(strArr[i]);
        }
      }

      setOutputStr(strArrOut.join(''));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center">ZigZag String Formatter</h2>

        <input
          type="text"
          placeholder="Enter strings like one,two,three"
          data-testid="input-box"
          value={enteredString}
          onChange={handleStringChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          data-testid="submit-button"
          onClick={handleSubmitOutputConverter}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>

        <div className="text-center">
          <p data-testid="output-result" className="text-lg font-medium text-gray-700">
            Output: <span className="text-blue-600">{outStr}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArrayZigZag;