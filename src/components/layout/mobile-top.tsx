import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import Nav from "../home/nav";

export default function MobileTop() {
  const [mute, setMute] = useState("false");
  const [route, setRoute] = useState("dashboard");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value="route" onValueChange={setRoute}>
          <DropdownMenuRadioItem value="dashboard" asChild>
            <Nav title="Dashboard" path="/" />
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="explore" asChild>
            <Nav title="Explore" path="/explore" />
          </DropdownMenuRadioItem>{" "}
          <DropdownMenuRadioItem value="explore" asChild>
            <Nav title="Activity" path="/activity" />
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <FiSearch className="size-6 text-white/50" />
            <span>Search</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={mute} onValueChange={setMute}>
          <DropdownMenuRadioItem value={"true"}>
            <IoNotifications className="size-6 text-white/[0.4]" />
            <span>Mute</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={"false"}>
            <IoNotifications className="size-6 text-white/[0.4]" />
            <span>Unmute</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <button className="flex items-center gap-3 px-4 py-3 border border-white/[0.02] rounded-sm bg-white/5">
              <Image
                src={"/images/wallet-icon.png"}
                alt="avater"
                width={23}
                height={23}
                className="rounded-full size-[23px]"
              />
              <p className="text-base font-normal">SPF0V...HN51D</p>
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button>Disconnect wallet</Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
