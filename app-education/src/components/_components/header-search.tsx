import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import useDebounce from "@/hook/useDebounce";
import useQueryString from "@/hook/useQueryString";

const mockSuggestions = [
  "Hồ Chí Minh",
  "Hồ Chí Minh với việc xây dựng Đảng",
  "Lịch sử Đảng Cộng sản Việt Nam",
  "Tư tưởng Hồ Chí Minh",
  "Cách mạng tháng Tám",
  "Chiến thắng Điện Biên Phủ",
];

function HeaderSearch({className}:{className?:string}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const { setQueryString ,removeQueryString} = useQueryString();
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery.trim().length === 0) {
      setResults([]);
      return;
    }
    const filtered = mockSuggestions.filter((item) =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setResults(filtered);
  }, [debouncedQuery]);
  return (
    <div className={`${className} max-w-md mx-auto relative`}>
      <div className="relative">
        <Input
          placeholder="Tìm kiếm sách..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="rounded-full px-4 py-2 shadow w-full"
        />
        {query && (
          <div
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black cursor-pointer"
            onClick={() => {
              setQuery("")
              removeQueryString('search')
            }}
          >
            <X className="w-4 h-4" />
          </div>
        )}
        <div
          onClick={() => {
            setQueryString("search", query);
            setResults([]);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          <Search className="w-4 h-4" />
        </div>
      </div>
      {results.length > 0 && (
        <Command className="absolute top-full left-0 w-full h-auto h-max-[500px] bg-white shadow-lg rounded mt-1 z-50 border">
          <p className="text-sm text-left p-2">Gợi ý tìm kiếm</p>
          <CommandList>
            {results.map((item, index) => (
              <CommandItem
                key={index}
                onSelect={() => {
                  setQuery(item);
                  setResults([]);
                  setQueryString("search", item);
                }}
                className="cursor-pointer hover:bg-gray-100 px-4 py-2"
              >
                {item}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      )}
    </div>
  );
}

export default HeaderSearch;
