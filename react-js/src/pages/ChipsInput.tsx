import { useState } from "react";

const ChipsInput = () => {
  const [input, setInput] = useState('');
  const [items,setItems] = useState([]);
  const handleChipInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let {value}= event.target;
    setInput(value)
  };

  const onKeyDownHandler = (e)=> {
        if (e.key === "Enter"){
           let arr = [...items];
           arr.push(input);
            setItems(arr);
        }
            // handleChipInputChange(e);
  };
  console.log('arr',items)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter Text Below</h2>
        <input
          type="text"
          value={input}
          onKeyDown={onKeyDownHandler}
          onChange={handleChipInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type and hit enter"
        />
      </div>
    </div>
  );
};

export default ChipsInput;
