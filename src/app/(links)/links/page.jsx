import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { cv } from "../../../../constants";
import CopiarURL from "@/components/copiar-url";
import CopiarPortapapeles from "@/components/copiar-portapapeles";
export default function LinksPage() {
  return (
    <main className="flex flex-col flex-wrap items-center w-full max-w-2xl gap-3 px-4 py-10 mx-auto">
      <div className="flex flex-row items-start justify-between w-full">
        <CopiarURL />
        <Image
          isBlurred
          radius="full"
          width={90}
          height={90}
          src="/esteban-avatar.webp"
          alt="Esteban Montecinos"
        />
        <CopiarPortapapeles />
      </div>
      <h1 className="text-2xl font-medium text-center text-black dark:text-white">
        Esteban Montecinos
      </h1>
      <p className="mb-4 text-black/75 dark:text-white/75">
        Ingeniero en Informática.
      </p>
      <NextLink
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium text-white transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent hover:bg-transparent dark:hover:text-white hover:text-black"
        href="/"
      >
        Portafolio
      </NextLink>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium text-white transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent hover:bg-transparent dark:hover:text-white hover:text-black"
        href={cv}
        size="sm"
        isExternal
      >
        Currículum Vitae
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium text-white transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent hover:bg-transparent dark:hover:text-white hover:text-black"
        href="mailto:estebanmontecinos2001@gmail.com"
        size="sm"
        isExternal
      >
        Gmail
      </Link>
      <h2 className="text-black dark:text-white">Redes Sociales</h2>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium text-white transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent hover:bg-transparent dark:hover:text-white hover:text-black"
        href="https://www.linkedin.com/in/esteban-montecinos/"
        size="sm"
        isExternal
      >
        LinkedIn
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium text-white transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent hover:bg-transparent dark:hover:text-white hover:text-black"
        href="https://github.com/Esteban-Montecinos"
        size="sm"
        isExternal
      >
        GitHub
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium text-white transition-colors bg-black border-2 border-black rounded-full dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent hover:bg-transparent dark:hover:text-white hover:text-black"
        href="https://www.instagram.com/estebannmontecinos/"
        size="sm"
        isExternal
      >
        Instagram
      </Link>
    </main>
  );
}
