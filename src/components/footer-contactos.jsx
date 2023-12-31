import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { cv } from "../../constants";
import MagneticButton from "./magnetic-button";

export default function FooterContactos() {
  return (
    <ul className="flex flex-row gap-6 mt-4">
      <li>
      <MagneticButton>
        <a
          href="https://github.com/Esteban-Montecinos"
          className="flex flex-col items-center p-2 transition-colors bg-white border border-black rounded-full dark:text-white dark:bg-black dark:border-white dark:hover:bg-lime-800 hover:bg-lime-400"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          <IconBrandGithub className="w-[26px] h-[26px]" stroke={1.2} />
        </a>
        </MagneticButton>
      </li>
      <li>
      <MagneticButton>
        <a
          href="https://www.linkedin.com/in/esteban-montecinos/"
          className="flex flex-col items-center p-2 transition-colors bg-white border border-black rounded-full dark:text-white dark:bg-black dark:border-white dark:hover:bg-lime-800 hover:bg-lime-400"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin className="w-[26px] h-[26px]" stroke={1.2} />
        </a>
        </MagneticButton>
      </li>
      <li>
      <MagneticButton>
        <a
          href={cv}
          className="flex flex-col items-center p-2 transition-colors bg-white border border-black rounded-full dark:text-white dark:bg-black dark:border-white dark:hover:bg-lime-800 hover:bg-lime-400"
          target="_blank"
          rel="noopener noreferrer"
          title="Currículum Vitae"
          aria-label="Currículum Vitae"
        >
          <IconFileCv className="w-[26px] h-[26px]" stroke={1.2} />
        </a>
      </MagneticButton>
      </li>
      <li>
      <MagneticButton>
        <a
          href="mailto:estebanmontecinos2001@gmail.com"
          className="flex flex-col items-center p-2 transition-colors bg-white border border-black rounded-full dark:text-white dark:bg-black dark:border-white dark:hover:bg-lime-800 hover:bg-lime-400"
          target="_blank"
          rel="noopener noreferrer"
          title="Gmail Esteban Montecinos"
          aria-label="Gmail Esteban Montecinos"
        >
          <IconBrandGmail className="w-[26px] h-[26px]" stroke={1.2} />
        </a>
      </MagneticButton>
      </li>
    </ul>
  );
}
