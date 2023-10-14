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
        src="https://github.com/Esteban-Montecinos.png"
        alt="Esteban Montecinos"
      />
      <h1 className="text-2xl font-medium text-center text-zinc-100">Esteban Montecinos</h1>
      <NextLink
        className="flex flex-row items-center justify-center w-full p-4 text-lg font-medium text-white transition-colors bg-black border rounded-full border-zinc-800 hover:border-white hover:bg-zinc-900"
        href="/"
      >
        Portafolio
      </NextLink>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-lg font-medium text-white transition-colors bg-black border rounded-full border-zinc-800 hover:border-white hover:bg-zinc-900"
        href={cv}
        size="sm"
        isExternal
      >
        Currículum Vitae
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-lg font-medium text-white transition-colors bg-black border rounded-full border-zinc-800 hover:border-white hover:bg-zinc-900"
        href="mailto:estebanmontecinos2001@gmail.com"
        size="sm"
        isExternal
      >
        Gmail
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-lg font-medium text-white transition-colors bg-black border rounded-full border-zinc-800 hover:border-white hover:bg-zinc-900"
        href="https://www.linkedin.com/in/esteban-montecinos/"
        size="sm"
        isExternal
      >
        LinkedIn
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-lg font-medium text-white transition-colors bg-black border rounded-full border-zinc-800 hover:border-white hover:bg-zinc-900"
        href="https://github.com/Esteban-Montecinos"
        size="sm"
        isExternal
      >
        GitHub
      </Link>
      <Link
        className="flex flex-row items-center justify-center w-full p-4 text-lg font-medium text-white transition-colors bg-black border rounded-full border-zinc-800 hover:border-white hover:bg-zinc-900"
        href="https://www.instagram.com/estebannmontecinos/"
        size="sm"
        isExternal
      >
        Instagram
      </Link>
      
    </main>
  );
}
