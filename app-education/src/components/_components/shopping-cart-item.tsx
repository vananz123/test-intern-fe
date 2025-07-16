import type { CartItem } from "@/redux/features/cart/type";
import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import { useAppDispatch } from "@/redux/hook";
import {
  deleteItemInCart,
  loadCart,
  updateQualityInCart,
} from "@/redux/features/cart/action";
import { ChangeCurrence } from "@/utils/utils";
import SelectProduct from "./select-product";
import { useEffect, useState } from "react";
function ShoppingCartItem({ data }: { data: CartItem }) {
  const min = 1;
  const [quantity, setQuantity] = useState(data.quantity);
  const dispatch = useAppDispatch();
  const handleDetele = (id: string) => {
    dispatch(deleteItemInCart(id));
    dispatch(loadCart());
  };
  useEffect(() => {
    dispatch(updateQualityInCart(data.id, quantity));
    dispatch(loadCart());
  }, [quantity, dispatch, setQuantity, data.id]);
  return (
    <div className="border-t">
      <div className="flex-1 space-y-1 lg:hidden">
        <div className="line-clamp-2 font-semibold text-sm">{data.title}</div>
      </div>
      <div className="flex items-center gap-4 pt-2 lg:p-4">
        <img
          src={data.cover_image}
          alt="ebook"
          className="w-16 h-20 rounded border"
        />
        {/* hidden */}
        <div className="flex-1 space-y-1 hidden lg:block">
          <div className="line-clamp-2 font-semibold text-sm">{data.title}</div>
          <div className="text-xs text-gray-600">{data.author}</div>
          <div className="text-red-600 text-sm font-semibold">
            Đơn giá: {ChangeCurrence(data.price)}
          </div>
        </div>
        <div>
          <SelectProduct value={quantity} min={min} setValue={setQuantity} />
        </div>
        <div className="text-red-600 font-bold text-sm">
          {ChangeCurrence(data.quantity * data.price)}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-red-500"
          onClick={() => {
            handleDetele(data.id);
          }}
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
