import BookCard from "@/components/_components/card";
import { loadLoadFavorite } from "@/redux/features/favorite/action";
import { selectFavorite } from "@/redux/features/favorite/reducer";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

function FavoriteProduct() {
  const { favorite } = useAppSelector(selectFavorite);
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(loadLoadFavorite())
  },[dispatch])
  const products = favorite.data;
  return (
    <div className="mt-4">
      {favorite && favorite.data && (
        <>
        {products && products.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {products.length > 0 &&
              products.map((i, index) => <BookCard key={index} data={i} />)}
          </div>
        </>
      ) : (
        <>
          <div className="flex w-full text-center justify-center">
            <div className="font-semibold">Không có sản phẩm nào</div>
          </div>
        </>
      )}</>
      )}
    </div>
  );
}

export default FavoriteProduct;
