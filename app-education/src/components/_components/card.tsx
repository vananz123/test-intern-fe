import { Card, CardContent } from "../ui/card";
import { Link } from "react-router";
import type { Product } from "@/types/product";
import { ChangeCurrence } from "@/utils/utils";

function BookCard({ data }: { data?: Product }) {
  return (
    <Link to={`/${data?.id}`}>
      <Card className="w-[162px] md:w-full max-w-[200px] rounded-xl shadow-lg hover:scale-[1.03] transition-all duration-300 overflow-hidden border bg-white relative group pt-0 pb-1 gap-1">
        <img
          src={data?.cover_image}
          alt="Phán quyết điển hình"
          className="h-[220px] w-full md:h-72 object-cover"
        />
        <CardContent className="">
          <p className="text-sm text-gray-700 line-clamp-2">{data?.title}</p>

          <p className="text-base font-semibold text-black mt-1">
            Chỉ từ{" "}
            <span className="text-red-600 font-bold">
              {ChangeCurrence(data?.price)}
            </span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BookCard;
