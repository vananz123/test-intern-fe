import { Badge } from "@/components/ui/badge";
import { loadCart } from "@/redux/features/cart/action";
import { selectCart } from "@/redux/features/cart/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ShoppingCart } from "lucide-react";
import { useEffect } from "react";

export default function CartIcon() {
  const {cart} = useAppSelector(selectCart)
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(loadCart())
  },[dispatch])
  return (
    <div className="relative p-4 rounded-lg inline-block">
      <ShoppingCart className="w-5 h-5 md:w-7 md:h-7" />
      <Badge className="text-[10px] absolute top-0 right-0 bg-white text-red-600 px-2 py-0 rounded-full border border-red-600 shadow md:text-sx md:px-2.5">
        <p className="text-black">{cart.itemCount}</p>
      </Badge>
    </div>
  );
}
