import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { cv } from "../../../../constants";
export default function LinksPage() {
  return (
    <main className="flex flex-col flex-wrap items-center w-full max-w-2xl gap-4 px-4 py-10 mx-auto dark:text-zinc-950 text-zinc-50">
      <Image
        isBlurred
        radius="full"
        width={90}
        height={90}
        src="https://github.com/Esteban-Montecinos.png"
        alt="Esteban Montecinos"
      />
      <h1 className="mb-6 text-2xl font-medium text-center text-white">Esteban Montecinos</h1>
      <NextLink
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-zinc-500 text-zinc-300 dark:hover:bg-black hover:bg-white dark:hover:text-white hover:text-black"
        href="/"
      >
        Portafolio
      </NextLink>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-zinc-500 text-zinc-300 dark:hover:bg-black hover:bg-white dark:hover:text-white hover:text-black"
        href={cv}
        size="sm"
        isExternal
      >
        Currículum Vitae
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-zinc-500 text-zinc-300 dark:hover:bg-black hover:bg-white dark:hover:text-white hover:text-black"
        href="mailto:estebanmontecinos2001@gmail.com"
        size="sm"
        isExternal
      >
        Gmail
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-zinc-500 text-zinc-300 dark:hover:bg-black hover:bg-white dark:hover:text-white hover:text-black"
        href="https://www.linkedin.com/in/esteban-montecinos/"
        size="sm"
        isExternal
      >
        LinkedIn
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-zinc-500 text-zinc-300 dark:hover:bg-black hover:bg-white dark:hover:text-white hover:text-black"
        href="https://github.com/Esteban-Montecinos"
        size="sm"
        isExternal
      >
        GitHub
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-zinc-500 text-zinc-300 dark:hover:bg-black hover:bg-white dark:hover:text-white hover:text-black"
        href="https://www.instagram.com/estebannmontecinos/"
        size="sm"
        isExternal
      >
        Instagram
      </Link>
      
    </main>
  );
}
