import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function HamburgerGuest() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="block md:hidden" />
      </SheetTrigger>
      <SheetContent side="top" className="h-full">
        <SheetHeader className="px-4 shadow-[0_0_20px_0_rgba(203,202,202,0.25)]">
          <SheetTitle className="font-bold text-lg">Menu</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 place-items-center justify-center gap-2 px-4">
          <>
            <Link
              href="/login"
              className={`${buttonVariants({
                variant: "outline",
              })} text-black md:w-36 w-full`}
            >
              Login
            </Link>
          </>
          <>
            <Link
              href="/register"
              className={`${buttonVariants({
                variant: "default",
              })} w-full md:w-36`}
            >
              Register
            </Link>
          </>
        </div>
      </SheetContent>
    </Sheet>
  );
}
