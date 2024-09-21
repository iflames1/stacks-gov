import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FiMenu } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import Button from "../common/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNavigation from "../home/mobile-navigation";

export default function MobileTop({ className }: { className?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("outline-none", className)}>
        <Button className="px-4 py-3">
          <FiMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-60"}>
        <MobileNavigation />

        <DropdownMenuSeparator className="my-4" />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Button className={cn("justify-start px-[14%] py-4 w-full")}>
              <IoNotifications className="size-6 text-white/[0.4]" />
              <span>Mute</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Button className={cn("justify-start px-[14%] py-4 w-full")}>
              <Image
                src={"/images/wallet-icon.png"}
                alt="avater"
                width={23}
                height={23}
                className="rounded-full size-[23px]"
              />
              <p className="text-base font-normal">SPF0V...HN51D</p>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-black">
            <Button className={cn("justify-start px-[14%] py-4 w-full")}>
              Disconnect wallet
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
