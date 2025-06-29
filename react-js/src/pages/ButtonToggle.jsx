import { useToggle } from "../hooks/useToggle";

export default function ButtonToggle() {
  const { value, toggle } = useToggle(false);
  const handleToggle = () => {
    toggle(!value);    
  }
  return (
  
    <button onClick={handleToggle} data-testid="toggle-button">
      {value? 'ON':'OFF'}
    </button>
  );
}
