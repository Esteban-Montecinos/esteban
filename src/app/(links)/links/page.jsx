import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

import { cv } from "../../../../constants";
export default function LinksPage() {
  return (
    <main className="flex flex-col flex-wrap items-center w-full max-w-2xl gap-4 px-4 py-10 mx-auto text-zinc-950">
      <Image
        isBlurred
        radius="full"
        width={90}
        height={90}
        className="mb-4"
        src="https://github.com/Esteban-Montecinos.png"
        alt="Esteban Montecinos"
      />
      <h1 className="mb-6 text-2xl font-medium text-center text-white">Esteban Montecinos</h1>
      <NextLink
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-white border-2 border-white rounded-full text-zinc-400 hover:bg-black hover:text-white"
        href="/"
      >
        Portafolio
      </NextLink>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-white border-2 border-white rounded-full text-zinc-400 hover:bg-black hover:text-white"
        href={cv}
        size="sm"
        isExternal
      >
        Currículum Vitae
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-white border-2 border-white rounded-full text-zinc-400 hover:bg-black hover:text-white"
        href="mailto:estebanmontecinos2001@gmail.com"
        size="sm"
        isExternal
      >
        Gmail
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-white border-2 border-white rounded-full text-zinc-400 hover:bg-black hover:text-white"
        href="https://www.linkedin.com/in/esteban-montecinos/"
        size="sm"
        isExternal
      >
        LinkedIn
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-white border-2 border-white rounded-full text-zinc-400 hover:bg-black hover:text-white"
        href="https://github.com/Esteban-Montecinos"
        size="sm"
        isExternal
      >
        GitHub
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-base font-medium transition-colors bg-white border-2 border-white rounded-full text-zinc-400 hover:bg-black hover:text-white"
        href="https://www.instagram.com/estebannmontecinos/"
        size="sm"
        isExternal
      >
        Instagram
      </Link>
      
    </main>
  );
}
