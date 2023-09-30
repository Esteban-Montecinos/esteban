import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { cv } from "../../constants";

export default function FooterContactos() {
  return (
    <footer className="flex flex-row gap-4 mt-8">
      <a
        href="https://github.com/Esteban-Montecinos"
        className="flex flex-col items-center p-2 transition-colors bg-black border rounded-full text-zinc-400 border-zinc-800 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 hover:bg-zinc-800 hover:text-zinc-100"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        aria-label="GitHub"
      >
        <IconBrandGithub className="w-12 h-12" />
      </a>
      <a
        href="https://www.linkedin.com/in/esteban-montecinos/"
        className="flex flex-col items-center p-2 transition-colors bg-black border rounded-full text-zinc-400 border-zinc-800 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 hover:bg-zinc-800 hover:text-zinc-100"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <IconBrandLinkedin className="w-12 h-12" />
      </a>
      <a
        href={cv}
        className="flex flex-col items-center p-2 transition-colors bg-black border rounded-full text-zinc-400 border-zinc-800 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 hover:bg-zinc-800 hover:text-zinc-100"
        target="_blank"
        rel="noopener noreferrer"
        title="Curriculum Vitae"
        aria-label="Curriculum Vitae"
      >
        <IconFileCv className="w-12 h-12" />
      </a>
    </footer>
  );
}
