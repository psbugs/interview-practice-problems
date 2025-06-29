import { useToggle } from "../hooks/useToggle";

export default function ButtonToggle() {
  const { value, toggle } = useToggle(false);

  const handleToggle = () => {
    toggle(!value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleToggle}
        data-testid="toggle-button"
        className={`px-6 py-2 rounded-full shadow-md transition-colors duration-300 text-white font-semibold 
          ${value ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
      >
        {value ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};