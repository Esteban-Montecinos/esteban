import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand
} from "@nextui-org/navbar";
import {Avatar} from "@nextui-org/avatar";
import NavigationList from "./link-active";

export default function NavigationMenu() {
  return (
    <Navbar isBordered maxWidth="lg" height="88px" classNames={{
      wrapper:[
        "px-8"
      ],
      content: [
        "gap-5"
      ]}}>
      <NavbarBrand>
        <Avatar src="https://github.com/Esteban-Montecinos.png" aria-label="Foto de Esteban Montecinos"/>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <NavigationList href="/" name="Inicio" />
        </NavbarItem>
        <NavbarItem>
          <NavigationList href="/blog" name="Blog" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      <NavbarItem>
        <p className="text-sm font-extralight">2023</p>
      </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
