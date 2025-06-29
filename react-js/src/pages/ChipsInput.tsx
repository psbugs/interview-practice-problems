import { useState } from "react";
import { Trash2 } from "lucide-react";

const ChipsInput = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleChipInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      if (!items.includes(input.trim())) {
        setItems([...items, input.trim()]);
      }
      setInput('');
    }
  };

  const removeItem = (item: string) => {
    setItems(items.filter((filterItem) => filterItem !== item));
  };

  return (
    <div className="min-h-screen bg-cyan-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Enter Text Below</h2>
        <input
          type="text"
          value={input}
          onKeyDown={onKeyDownHandler}
          onChange={handleChipInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type and hit enter"
        />

        {items.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full shadow-sm"
              >
                <span className="mr-2">{item}</span>
                <button
                  onClick={() => removeItem(item)}
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChipsInput;
