import { LINKS } from "../../constants";
import MagneticButton from "./magnetic-button";

export default function FooterContactos() {
  
  return (
    <ul className="flex flex-row gap-6 mt-4">
      {LINKS.map(({href, title, Icon}) => (
        <li key={href}>
        <MagneticButton>
          <a
            href={href}
            className="flex flex-col items-center p-2 transition-colors bg-transparent border border-black rounded-full dark:text-white dark:border-white dark:hover:bg-lime-800/50 hover:bg-lime-400/50"
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            aria-label={title}
          >
            <Icon className="w-[26px] h-[26px]" stroke={1.2} />
          </a>
        </MagneticButton>
      </li> 
      ))}
    </ul>
  );
}
