import ShoppingCartItem from "@/components/_components/shopping-cart-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { loadCart } from "@/redux/features/cart/action";
import { selectCart } from "@/redux/features/cart/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ChangeCurrence } from "@/utils/utils";
import { useEffect } from "react";
import { Link } from "react-router";
function ShoppingCart() {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(selectCart);
  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 lg:p-6 bg-green-100 min-h-screen">
        {/* Giỏ hàng bên trái */}
        <Card className="md:col-span-2">
          <CardHeader className="text-xl font-bold">
            GIỎ SÁCH CỦA BẠN
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Chọn tất cả + mua thêm */}
            <div className="flex justify-between items-center text-sm font-medium">
              <div className="flex items-center gap-2">
                <span>{`Tất cả (${cart.itemCount} sản phẩm)`}</span>
              </div>
              <Link to="/" className="text-orange-500 hover:underline text-sm">
                Mua thêm &gt;
              </Link>
            </div>
            {/* Sản phẩm */}
            {cart.data && cart.data.length > 0 ? (
              <>
                {cart.data.map((i, index) => (
                  <ShoppingCartItem key={index} data={i} />
                ))}
              </>
            ) : (
              <>
                <p className="text-sm text-center">
                  Không có sản phẩm nào trong giỏ hàng
                </p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Thanh toán bên phải */}
        <Card>
          <CardContent className="pt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Tổng tiền:</span>
              <span className="text-blue-600 font-semibold">
                {ChangeCurrence(cart.totalPrice)}
              </span>
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span className="text-blue-600 font-semibold">
                  {ChangeCurrence(cart.totalPrice)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Giảm giá đơn:</span>
                <span>-0₫</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t font-bold text-red-600 text-base">
              <span>Thanh toán:</span>
              <span>{ChangeCurrence(cart.totalPrice)}</span>
            </div>

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              🛒 Mua hàng
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ShoppingCart;
