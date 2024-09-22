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
import { FaPowerOff } from "react-icons/fa6";

export default function MobileTop({ className }: { className?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn("outline-none", className)}>
        <Button className="px-4 py-3">
          <FiMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-60 border border-white/[0.02] "}>
        <MobileNavigation />

        <DropdownMenuGroup className="flex flex-col gap-1 p-1">
          <DropdownMenuItem>
            <Button className={cn("justify-start px-[14%] py-3 w-full")}>
              <IoNotifications className="size-4 text-white/[0.4]" />
              <span>Mute</span>
            </Button>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Button className={cn("justify-start px-[14%] py-3 w-full")}>
              <Image
                src={"/images/wallet-icon.png"}
                alt="avater"
                width={16}
                height={16}
                className="rounded-full size-[23px]"
              />
              <p className="text-base font-normal">SPF0V...HN51D</p>
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem className="">
            <Button className={cn("justify-start px-[14%] py-3 w-full")}>
              <FaPowerOff className="size-4 text-white/[0.4]" />
              <span>Disconnect wallet</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
