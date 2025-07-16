import reactLogo from "@/assets/react.svg";
import CartIcon from "@/components/_components/cart-icon";
import { Link } from "react-router";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import HeaderSearch from "@/components/_components/header-search";
import SheetForMoblie from "@/components/_components/sheet-for-moble";
import { Nav } from "@/components/_components/nav";
function Header() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <div className="w-6 h-full md:w-8">
            <img src={reactLogo} />
          </div>
        </Link>
        <HeaderSearch className="hidden md:block w-[400px]"/>
        <div className="flex items-center gap-2">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link to={"/cart"}>
                <CartIcon />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="text-muted-foreground text-xs">
                    Joined December 2021
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <div className="md:hidden"><SheetForMoblie/></div>
        </div>
        
      </div>
      <HeaderSearch className="md:hidden w-full"/>
      <div className="hidden md:flex justify-between flex-wrap">
        <Nav className="flex"/>
      </div>
    </div>
  );
}

export default Header;
