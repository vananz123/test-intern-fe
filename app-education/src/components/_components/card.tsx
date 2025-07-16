import { Card, CardContent } from "../ui/card";
import { Link } from "react-router";
import type { Product } from "@/types/product";
import { ChangeCurrence } from "@/utils/utils";

function BookCard({data}:{data?:Product}) {

  return (
    <Link to={`/${data?.id}`}>
      <Card className="w-[162px] md:w-[192px] h-auto rounded-xl overflow-hidden shadow-md border bg-white relative group pt-0 pb-1 gap-1">
        <img
          src={data?.cover_image}
          alt="Phán quyết điển hình"
          className="w-full h-[200px] md:h-[288px] object-fill"
        />
        <CardContent className="p-1">
          <p className="text-sm text-gray-700 line-clamp-2">
            {data?.title}
          </p>

          <p className="text-base font-semibold text-black mt-2">
            Chỉ từ <span className="text-red-600">{ChangeCurrence(data?.price)}</span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default BookCard;
