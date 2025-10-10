import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Menu, Star, Store } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import LogoutButton from "./LogoutButton";

export function HamburgerBuyer() {
  const username = localStorage.getItem("username");
  const avatar = localStorage.getItem("avatar");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="block md:hidden" />
      </SheetTrigger>
      <SheetContent side="top" className="h-full">
        <SheetHeader className="px-4 shadow-[0_0_20px_0_rgba(203,202,202,0.25)]">
          <SheetTitle className="font-bold text-lg">Menu</SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-2 px-4">
          <Button
            variant="outline"
            className="rounded-full w-full justify-start px-3"
          >
            <Link href="/open-store" className="flex items-center gap-2 w-full">
              <Store className="size-5" />
              <p className="font-bold text-sm">Open Store</p>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="rounded-full w-full px-3 justify-start"
          >
            <Link href="/buyer-home" className="flex items-center gap-2 w-full">
              <Avatar>
                <AvatarImage
                  className="rounded-full py-1 h-7.5 w-7.5 object-cover"
                  src={avatar || "/imagecorrupt.png"}
                />
              </Avatar>
              <p className="font-bold text-sm">{username}</p>
            </Link>
          </Button>
        </div>

        <div className="grid p-3 ">
          <Link href="/buyer-home">
            <Button
              className="justify-start h-11.5 hover:font-bold w-full transition-all duration-25 ease-out"
              variant="ghost"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6663 1.89063V5.33274C11.6663 5.79945 11.6663 6.03281 11.7572 6.21107C11.8371 6.36787 11.9645 6.49535 12.1213 6.57525C12.2996 6.66608 12.533 6.66608 12.9997 6.66608H16.4418M11.6663 14.166H6.66634M13.333 10.8327H6.66634M16.6663 8.32287V14.3327C16.6663 15.7328 16.6663 16.4329 16.3939 16.9677C16.1542 17.4381 15.7717 17.8205 15.3013 18.0602C14.7665 18.3327 14.0665 18.3327 12.6663 18.3327H7.33301C5.93288 18.3327 5.23281 18.3327 4.69803 18.0602C4.22763 17.8205 3.84517 17.4381 3.60549 16.9677C3.33301 16.4329 3.33301 15.7328 3.33301 14.3327V5.66602C3.33301 4.26588 3.33301 3.56582 3.60549 3.03104C3.84517 2.56063 4.22763 2.17818 4.69803 1.9385C5.23281 1.66602 5.93288 1.66602 7.33301 1.66602H10.0095C10.621 1.66602 10.9267 1.66602 11.2144 1.73509C11.4695 1.79633 11.7134 1.89734 11.9371 2.03442C12.1893 2.18902 12.4055 2.40521 12.8379 2.83759L15.4948 5.49444C15.9271 5.92682 16.1433 6.14301 16.2979 6.3953C16.435 6.61898 16.536 6.86285 16.5973 7.11794C16.6663 7.40566 16.6663 7.71139 16.6663 8.32287Z"
                  stroke="#0A0D12"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Order List
            </Button>
          </Link>
          <Link href="/buyer-home?tab=reviews">
            <Button
              variant="ghost"
              className="justify-start w-full h-11.5 hover:font-bold transition-all duration-25 ease-out"
            >
              <Star />
              Review
            </Button>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <LogoutButton />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Logout</DialogTitle>
                <DialogDescription>
                  You will need to sign in again to access your account
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex justify-end gap-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive">Logout</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </SheetContent>
    </Sheet>
  );
}
