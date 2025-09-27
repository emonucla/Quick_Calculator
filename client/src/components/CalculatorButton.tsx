import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalculatorButtonProps {
  value: string;
  label?: string;
  onClick: (value: string) => void;
  variant?: "number" | "operator" | "function" | "equals";
  className?: string;
  disabled?: boolean;
}

export default function CalculatorButton({ 
  value, 
  label, 
  onClick, 
  variant = "number", 
  className,
  disabled = false 
}: CalculatorButtonProps) {
  const handleClick = () => {
    if (!disabled) {
      onClick(value);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "operator":
        return "bg-primary text-primary-foreground hover:bg-primary/90";
      case "function":
        return "bg-destructive text-destructive-foreground hover:bg-destructive/90";
      case "equals":
        return "bg-primary text-primary-foreground hover:bg-primary/90";
      default:
        return "bg-secondary text-secondary-foreground hover:bg-secondary/90";
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "h-16 text-lg font-medium transition-all duration-150 active:scale-95",
        getVariantStyles(),
        className
      )}
      data-testid={`button-${value.replace(/[^a-zA-Z0-9]/g, '')}`}
    >
      {label || value}
    </Button>
  );
}