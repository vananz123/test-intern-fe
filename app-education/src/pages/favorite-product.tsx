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
    <div>
      {favorite && favorite.data && (
        <>
        {products && products.length > 0 ? (
        <>
          <div className="flex flex-row flex-wrap gap-4">
            {products.length > 0 &&
              products.map((i, index) => <BookCard key={index} data={i} />)}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row text-center flex-wrap gap-4">
            Chưa có sản phẩm yêu thích nào
          </div>
        </>
      )}</>
      )}
    </div>
  );
}

export default FavoriteProduct;
