import SelectProduct from "@/components/_components/select-product";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { addToCart, loadCart } from "@/redux/features/cart/action";
import type { CartItem } from "@/redux/features/cart/type";
import { handleFavorite } from "@/redux/features/favorite/action";
import { loadDetailProduct } from "@/redux/features/product/action";
import { selectDetailProduct } from "@/redux/features/product/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ChangeCurrence } from "@/utils/utils";
import { Heart, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";
function DetailProduct() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { detailProduct } = useAppSelector(selectDetailProduct);
  const [quantity, setQuantity] = useState(1);
  const product = detailProduct.data;
  useEffect(() => {
    dispatch(loadDetailProduct({ id: id as string }));
  }, [dispatch, id]);
  const [spin, setSpin] = useState(false);
  const handleHeart = async () => {
    setSpin(true);
    if (product !== null) {
      await dispatch(handleFavorite(product.id));
      await dispatch(loadDetailProduct({ id: id as string }));
    }
    setSpin(false);
  };
  const handleAddToCart = () => {
    const cart = { ...product, quantity: quantity } as CartItem;
    dispatch(addToCart(cart));
    dispatch(loadCart());
    toast("Sản phẩm đã thêm vào giỏ hàng", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "X",
        onClick: () => console.log("Undo"),
      },
    });
  };
  return (
    <div>
      {product !== null ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2 lg:p-6">
            {/* Ảnh bìa sách */}
            <div className="flex justify-center">
              <img
                src={product.cover_image}
                alt="Book cover"
                className="rounded-xl shadow-md h-[350px] w-[240px] md:h-[450px] md:w-[300px]"
              />
            </div>
            {/* Thông tin sản phẩm */}
            <Card className="pt-2 text-left lg:p-6">
              <CardContent className="space-y-4">
                <div>
                  <h1 className="text-lg lg:text-xl font-semibold text-left">
                    {product.title}
                  </h1>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <span className="font-semibold text-black">
                        {product.rating} ⭐
                      </span>
                    </div>

                    <div className="flex items-center space-x-1 border-l pl-4">
                      <span className="font-semibold text-black">
                        {product.view_count}
                      </span>
                      <span>Lượt xem</span>
                    </div>

                    <div className="flex items-center space-x-1 border-l pl-4">
                      <span className="font-semibold text-black">
                        {product.sold_count}
                      </span>
                      <span>Đã bán</span>
                    </div>

                    <div className="border-l pl-4">
                      {spin ? (
                        <>
                          <LoaderCircle className="animate-spin" />
                        </>
                      ) : (
                        <>
                          <Heart
                            onClick={handleHeart}
                            className={
                              product.is_favorite ? "text-red-500" : ""
                            }
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Chọn sản phẩm */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold">📚 Sách giấy</span>
                    <SelectProduct
                      value={quantity}
                      min={1}
                      setValue={setQuantity}
                    />
                    <div className="ml-auto text-right">
                      <div className="text-lg font-semibold text-red-600">
                        {ChangeCurrence(product.price)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tổng tiền */}
                <div className="items-center justify-between pt-4 border-t">
                  <div className="flex flex-row text-center items-center">
                    <span className="text-sm text-gray-600">Thành tiền: </span>
                    <div className="text-xl font-bold text-red-600 ml-2">
                      {ChangeCurrence(product.price * quantity)}
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button className="bg-red-500 hover:bg-red-600 text-white w-1/2">
                      💰 Mua ngay
                    </Button>
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 w-1/2"
                      onClick={handleAddToCart}
                    >
                      🛒 Thêm vào giỏ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:p-6">
            <Card>
              <CardContent>
                <Tabs defaultValue="d">
                  <TabsList>
                    <TabsTrigger value="d">Giới thiệu</TabsTrigger>
                    <TabsTrigger value="a">Tác giả</TabsTrigger>
                  </TabsList>
                  <TabsContent value="d">
                    <Card>
                      <CardContent>{product.description}</CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="a">
                    <Card>
                      <CardContent>{product.author}</CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="flex justify-center">
              <Skeleton className="h-[400px] w-[300px]" />
            </div>
            <Skeleton className="h-[400px] w-[300px]" />
          </div>
          <Skeleton className="h-[400px] w-full mt-2" />
        </div>
      )}
      {detailProduct.isLoading === false && detailProduct.data === null && (
        <>
          <p>Sản phẩm này bị lỗi</p>
        </>
      )}
    </div>
  );
}

export default DetailProduct;
