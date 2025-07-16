import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { Nav } from "./nav";
export default function SheetForMoblie() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Đây là menu trượt từ trái.</SheetDescription>
        </SheetHeader>
        <div className="mt-4 ml-4">
          <Nav className="flex flex-col"/>
        </div>
      </SheetContent>
    </Sheet>
  );
}
