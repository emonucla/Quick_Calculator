import CalculatorDisplay from '../CalculatorDisplay';

export default function CalculatorDisplayExample() {
  return (
    <div className="max-w-sm mx-auto p-4">
      <CalculatorDisplay expression="42 + 58" result="100" />
    </div>
  );
}