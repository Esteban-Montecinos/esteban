import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { cv } from "../../constants";

export default function FooterContactos() {
  return (
    <ul className="flex flex-row gap-4 mt-4">
      <li>
        <a
          href="https://github.com/Esteban-Montecinos"
          className="flex flex-col items-center p-2 transition-colors border border-black rounded-full bg-zinc-400 dark:text-white dark:bg-black dark:border-white bg-gradient-to-tl dark:from-black/80 from-white/80 via-zinc-600/20 to-white/80 dark:to-black/80 dark:hover:bg-zinc-800 hover:bg-zinc-400/60"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          <IconBrandGithub className="w-6 h-6" stroke={1} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/esteban-montecinos/"
          className="flex flex-col items-center p-2 transition-colors border border-black rounded-full bg-zinc-400 dark:text-white dark:bg-black dark:border-white bg-gradient-to-tl dark:from-black/80 from-white/80 via-zinc-600/20 to-white/80 dark:to-black/80 dark:hover:bg-zinc-800 hover:bg-zinc-400/60"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin className="w-6 h-6" stroke={1} />
        </a>
      </li>
      <li>
        <a
          href={cv}
          className="flex flex-col items-center p-2 transition-colors border border-black rounded-full bg-zinc-400 dark:text-white dark:bg-black dark:border-white bg-gradient-to-tl dark:from-black/80 from-white/80 via-zinc-600/20 to-white/80 dark:to-black/80 dark:hover:bg-zinc-800 hover:bg-zinc-400/60"
          target="_blank"
          rel="noopener noreferrer"
          title="Currículum Vitae"
          aria-label="Currículum Vitae"
        >
          <IconFileCv className="w-6 h-6" stroke={1} />
        </a>
      </li>
      <li>
        <a
          href="mailto:estebanmontecinos2001@gmail.com"
          className="flex flex-col items-center p-2 transition-colors border border-black rounded-full bg-zinc-400 dark:text-white dark:bg-black dark:border-white bg-gradient-to-tl dark:from-black/80 from-white/80 via-zinc-600/20 to-white/80 dark:to-black/80 dark:hover:bg-zinc-800 hover:bg-zinc-400/60"
          target="_blank"
          rel="noopener noreferrer"
          title="Gmail Esteban Montecinos"
          aria-label="Gmail Esteban Montecinos"
        >
          <IconBrandGmail className="w-6 h-6" stroke={1} />
        </a>
      </li>
    </ul>
  );
}
