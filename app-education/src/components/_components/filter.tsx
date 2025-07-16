import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FILTER_PRICE } from "@/common/consultant";
import useQueryString from "@/hook/useQueryString";

export function Filter({className=""}:{className?:string}) {
const { setQueryString } = useQueryString();
  const [value, setValue] = React.useState<number>(1);
  const handleChangeValue = (e:string) => {
    setValue(Number(e));
    setQueryString('optionPrice',e)
  };
  return (
    <div>
      <Select value={`${value}`} onValueChange={handleChangeValue}>
        <SelectTrigger className={`w-[180px] ${className} `}>
          <SelectValue placeholder="Chọn theo giá" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Lọc theo giá</SelectLabel>
            {FILTER_PRICE.map((_,index) => (
             <SelectItem key={index} value={`${_.value}`}>
                  {_.text}
                </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
