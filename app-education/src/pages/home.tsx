import BookCard from "@/components/_components/card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { loadHome as loadHoneDefault } from "@/redux/features/home/action";
import { selectHome } from "@/redux/features/home/reducer";
import { Skeleton } from "@/components/ui/skeleton";
import useHistoryProduct from "@/hook/useHistoryProduct";
import { Filter } from "@/components/_components/filter";
import useQueryString from "@/hook/useQueryString";
function Home() {
  const { queryString } = useQueryString();
  const dispatch = useAppDispatch();
  const { home } = useAppSelector(selectHome);
  const optionPrice = Number(queryString.optionPrice);
  const searchTitle = queryString.search;
  const { setProductViewer } = useHistoryProduct();
  useEffect(() => {
    dispatch(loadHoneDefault({ search: searchTitle, range: optionPrice }));
  }, [dispatch, optionPrice, searchTitle]);
  return (
    <div>
      <div className="text-left flex justify-between items-center md:justify-start md:gap-2">
        <h2 className="my-2">Lọc theo giá</h2>
        <Filter className="bg-white my-2" />
      </div>
      {home && home.data && home.data.length <= 0 && (
        <div className="flex w-full text-center justify-center">
          <div className="font-semibold">Không có sản phẩm phù hợp</div>
        </div>
      )}
      {home && home.data ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {home.data.length > 0 &&
              home.data.map((i, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setProductViewer(i);
                  }}
                >
                  <BookCard data={i} />
                </div>
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                className="h-[220px] w-[162px] md:h-72 md:w-full rounded-xl"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
