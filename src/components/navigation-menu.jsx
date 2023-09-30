import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import UserAvatar from "./user-avatar";
import Link from "next/link";
import NavigationList from "./link-active";

export default function NavigationMenu() {
  return (
    <Navbar isBordered maxWidth="xl">
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">Esteban Montecinos</Link>
      </NavbarBrand>
      <NavbarContent justify="start"> 
      <NavbarItem>
        <NavigationList href="/blog" name="Blog" />
      </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden min-[450px]:flex">
        <NavbarItem className="flex">
          <UserAvatar/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}