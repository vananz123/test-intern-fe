import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
interface Props {
  value: number;
  min:number;
  max?: number;
  setValue: (value: number) => void;
}
function SelectProduct({ value, min,  max = 100, setValue }: Props) {
  const handleDecrease = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };
  const handleIncrease = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };
  return (
    <div className="flex items-center justify-between border rounded px-0">
      <Button variant="ghost" size="icon" onClick={handleDecrease}>
        <Minus className="w-2 h-2 lg:w-4 lg:h-4" />
      </Button>
      <span className="px-0">{value}</span>
      <Button variant="ghost" size="icon" onClick={handleIncrease}>
        <Plus className="w-2 h-2 lg:w-4 lg:h-4" />
      </Button>
    </div>
  );
}

export default SelectProduct;
