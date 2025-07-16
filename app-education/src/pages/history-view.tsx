import BookCard from "@/components/_components/card";
import useHistoryProduct from "@/hook/useHistoryProduct";

function HistoryView() {
  const { products } = useHistoryProduct();
  console.log(products);
  return (
    <div>
      {products.length >0 ? (
        <>
          <div className="flex flex-row flex-wrap gap-4">
            {products.length > 0 &&
              products.map((i, index) => (
                <BookCard key={index} data={i} />
              ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row flex-wrap gap-4">
            Chưa có lịch sử xem
          </div>
        </>
      )}
    </div>
  );
}

export default HistoryView;
