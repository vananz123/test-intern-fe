import { NAV } from "@/common/consultant";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";
export function Nav({className}:{className?:string}) {
  const loca = useLocation()
  const active = loca.pathname || '/'
  
  return (
    <nav className={`${className} space-x-6 text-sm font-medium`}>
      {NAV.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className={cn(
            active === item.link
              ? "text-black font-semibold"
              : "text-gray-500 hover:text-black"
          )}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
}
