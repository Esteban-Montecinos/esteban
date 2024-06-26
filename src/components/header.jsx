import FooterContactos from "./footer-contactos";

export default function Header() {
  return (
    <section className="flex flex-row w-full justify-center items-center min-h-[calc(100vh-100px)]">
      <article className="flex flex-col gap-2">
        <header className="my-2">
          <h1 className="mb-4 text-4xl font-light text-balance md:text-6xl ">
            Hola, soy{" "}
            <strong className="font-semibold">Esteban Montecinos</strong>, Ingeniero en Informática.
          </h1>
        </header>
        <p className="text-lg leading-relaxed tracking-wide text-left text-pretty md:text-xl dark:text-zinc-300 text-zinc-800">
          Me gusta desarrollar webs con <strong className="font-semibold text-black dark:text-white">React, Next.js y Tailwind CSS</strong>.
        </p>
        <p className="text-lg leading-relaxed tracking-wide text-left text-pretty md:text-xl dark:text-zinc-300 text-zinc-800">
          Trabajando como QA Tecnico 😺.
        </p>
        <FooterContactos />
      </article>
    </section>
  );
}
