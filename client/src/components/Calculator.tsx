import { useState } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButton from "./CalculatorButton";
import ThemeToggle from "./ThemeToggle";
import { Card } from "@/components/ui/card";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [waitingForNewNumber, setWaitingForNewNumber] = useState(false);

  const handleNumber = (value: string) => {
    if (waitingForNewNumber) {
      setResult(value);
      setWaitingForNewNumber(false);
    } else {
      setResult(result === "0" ? value : result + value);
    }
  };

  const handleOperator = (operator: string) => {
    const newExpression = expression + result + " " + operator + " ";
    setExpression(newExpression);
    setWaitingForNewNumber(true);
  };

  const handleEquals = () => {
    try {
      const fullExpression = expression + result;
      // Simple expression evaluation (replace with proper math parser in production)
      const cleanExpression = fullExpression
        .replace(/×/g, "*")
        .replace(/÷/g, "/");
      
      // Basic validation - only allow numbers, operators, spaces, and parentheses
      if (!/^[\d\s+\-*/().]+$/.test(cleanExpression)) {
        throw new Error("Invalid expression");
      }
      
      const evaluated = Function('"use strict"; return (' + cleanExpression + ')')();
      const resultStr = Number(evaluated).toString();
      
      setResult(resultStr);
      setExpression("");
      setWaitingForNewNumber(true);
    } catch (error) {
      setResult("Error");
      setExpression("");
      setWaitingForNewNumber(true);
      console.error("Calculation error:", error);
    }
  };

  const handleClear = () => {
    setResult("0");
    setExpression("");
    setWaitingForNewNumber(false);
  };

  const handleAllClear = () => {
    handleClear();
  };

  const handleDelete = () => {
    if (result.length > 1) {
      setResult(result.slice(0, -1));
    } else {
      setResult("0");
    }
  };

  const handleDecimal = () => {
    if (!result.includes(".")) {
      setResult(result + ".");
    }
  };

  const handleButtonClick = (value: string) => {
    console.log(`Calculator button pressed: ${value}`);
    
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        handleNumber(value);
        break;
      case "+":
      case "-":
      case "×":
      case "÷":
        handleOperator(value);
        break;
      case "=":
        handleEquals();
        break;
      case "C":
        handleClear();
        break;
      case "AC":
        handleAllClear();
        break;
      case "⌫":
        handleDelete();
        break;
      case ".":
        handleDecimal();
        break;
      default:
        console.warn("Unknown button value:", value);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-foreground">Calculator</h1>
          <ThemeToggle />
        </div>
        
        <Card className="p-6 shadow-lg">
          <CalculatorDisplay expression={expression} result={result} />
          
          <div className="grid grid-cols-4 gap-2" data-testid="calculator-buttons">
            {/* First row */}
            <CalculatorButton value="AC" onClick={handleButtonClick} variant="function" />
            <CalculatorButton value="C" onClick={handleButtonClick} variant="function" />
            <CalculatorButton value="⌫" onClick={handleButtonClick} variant="function" />
            <CalculatorButton value="÷" onClick={handleButtonClick} variant="operator" />
            
            {/* Second row */}
            <CalculatorButton value="7" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="8" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="9" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="×" onClick={handleButtonClick} variant="operator" />
            
            {/* Third row */}
            <CalculatorButton value="4" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="5" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="6" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="-" onClick={handleButtonClick} variant="operator" />
            
            {/* Fourth row */}
            <CalculatorButton value="1" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="2" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="3" onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="+" onClick={handleButtonClick} variant="operator" />
            
            {/* Fifth row */}
            <CalculatorButton 
              value="0" 
              onClick={handleButtonClick} 
              variant="number" 
              className="col-span-2" 
            />
            <CalculatorButton value="." onClick={handleButtonClick} variant="number" />
            <CalculatorButton value="=" onClick={handleButtonClick} variant="equals" />
          </div>
        </Card>
      </div>
    </div>
  );
}