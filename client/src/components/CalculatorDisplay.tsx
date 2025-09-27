interface CalculatorDisplayProps {
  expression: string;
  result: string;
}

export default function CalculatorDisplay({ expression, result }: CalculatorDisplayProps) {
  return (
    <div className="bg-card border border-card-border rounded-md p-6 mb-4" data-testid="calculator-display">
      <div className="text-right">
        <div className="font-display text-muted-foreground text-lg mb-1 min-h-6" data-testid="display-expression">
          {expression || "\u00A0"}
        </div>
        <div className="font-display text-card-foreground text-4xl font-medium min-h-12" data-testid="display-result">
          {result || "0"}
        </div>
      </div>
    </div>
  );
}