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
    <Navbar maxWidth="lg" classNames={{
      base:["backdrop-blur border-b dark:border-zinc-800 border-zinc-400 h-[88px]"],
      wrapper:[
        "px-8"
      ],
      content: [
        "gap-5"
      ]}}>
      <NavbarBrand>
        <Avatar size="lg" src="/esteban-icon.webp" aria-label="Foto de Esteban Montecinos"/>
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
        <p className="text-sm font-light dark:text-zinc-400 text-zinc-700">2024</p>
      </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
