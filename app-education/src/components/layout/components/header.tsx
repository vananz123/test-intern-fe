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
import ShoppingCartItem from "@/components/_components/shopping-cart-item";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectCart } from "@/redux/features/cart/reducer";
import { loadCart } from "@/redux/features/cart/action";
import { useEffect } from "react";
function Header() {
  const dispatch = useAppDispatch();
    const { cart } = useAppSelector(selectCart);
    useEffect(() => {
      dispatch(loadCart());
    }, [dispatch]);
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
            <HoverCardContent className="w-auto">
              {cart.data && cart.data.length > 0 ? (
              <>
                {cart.data.map((i, index) => (
                  <ShoppingCartItem key={index} data={i} />
                ))}
              </>
            ) : (
              <>
                <p className="text-sm text-center font-semibold">
                  Không có sản phẩm nào trong giỏ hàng
                </p>
              </>
            )}
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
