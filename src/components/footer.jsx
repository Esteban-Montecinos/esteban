import { Avatar } from "@nextui-org/avatar";
import FooterContactos from "./footer-contactos";
import ThemeSwitcher from "@/app/theme-swicher";

export default function Footer() {
  return (
    <footer className="mt-8 border-t dark:border-zinc-800 border-zinc-400">
      <nav className="flex flex-col max-w-5xl gap-4 px-8 m-auto mt-20 pb-9">
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4">
          <a
            href="https://www.instagram.com/estebannmontecinos/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            aria-label="Instagram"
          >
            <Avatar
              className="mt-4 w-11 h-11"
              src="https://github.com/Esteban-Montecinos.png"
            />
          </a>
          <FooterContactos />
        </div>
        <div className="flex flex-row items-center justify-center">
          <ThemeSwitcher />
        </div>
        <p className="self-center text-center text-sm [text-wrap:balance]">
          Desarrollado con ♥ por Esteban Montecinos.
        </p>
      </nav>
    </footer>
  );
}
