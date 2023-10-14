import { Avatar } from "@nextui-org/avatar";
import FooterContactos from "./footer-contactos";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-800">
      <nav className="flex flex-col max-w-5xl gap-4 px-8 m-auto mt-20 mb-9">
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-4">
          <a
            href="https://www.instagram.com/estebannmontecinos/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          aria-label="Instagram"
          >
            <Avatar
              className="mt-4"
              size="md"
              src="https://github.com/Esteban-Montecinos.png"
            />
          </a>
          <FooterContactos />
        </div>
        <p className="self-center text-sm">
          Desarrollado con ♥ por Esteban Montecinos.
        </p>
      </nav>
    </footer>
  );
}
