import { DropdownMenuGroup, DropdownMenuItem } from "../ui/dropdown-menu";
import Nav from "./nav";

export default function MobileNavigation() {
  return (
    <DropdownMenuGroup>
      <DropdownMenuItem>
        <Nav path="/" title="Dashboard" />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Nav path="/explore" title="Explore" />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Nav title="Delegates" path="/delegates" />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Nav title="Activity" path="/activity" />
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
}
