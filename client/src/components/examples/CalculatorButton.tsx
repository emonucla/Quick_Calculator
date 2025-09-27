import CalculatorButton from '../CalculatorButton';

export default function CalculatorButtonExample() {
  const handleClick = (value: string) => {
    console.log(`Button clicked: ${value}`);
  };

  return (
    <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto p-4">
      <CalculatorButton value="7" onClick={handleClick} variant="number" />
      <CalculatorButton value="8" onClick={handleClick} variant="number" />
      <CalculatorButton value="9" onClick={handleClick} variant="number" />
      <CalculatorButton value="÷" onClick={handleClick} variant="operator" />
      
      <CalculatorButton value="4" onClick={handleClick} variant="number" />
      <CalculatorButton value="5" onClick={handleClick} variant="number" />
      <CalculatorButton value="6" onClick={handleClick} variant="number" />
      <CalculatorButton value="×" onClick={handleClick} variant="operator" />
      
      <CalculatorButton value="C" onClick={handleClick} variant="function" />
      <CalculatorButton value="=" onClick={handleClick} variant="equals" />
    </div>
  );
}