import FooterContactos from "./footer-contactos";

export default function Header() {
  return (
    <section className="flex flex-row w-full justify-center items-center min-h-[calc(100vh-100px)]">
      <article className="flex flex-col">
        <header className="my-4">
          <h1 className="text-4xl break-words mb-4 font-light [text-wrap:balance] md:text-6xl ">
            Hola, soy{" "}
            <strong className="font-semibold">Esteban Montecinos.</strong>
          </h1>
          <h2 className="text-xl font-normal [text-wrap:balance] md:text-2xl ">
            Ingeniero en Informática y Desarrollador <strong>Fullstack.</strong>
          </h2>
        </header>

        <p className="text-lg leading-relaxed [text-wrap:balance] tracking-wide text-left md:text-xl dark:text-zinc-400 text-zinc-700">
          Me gusta trabajar con <strong>React, Next.js y Tailwind CSS</strong>,
          mi enfoque está en crear <strong>experiencias de usuario</strong>{' '}
          intuitivas y receptivas que mejoren la interacción entre las personas
          y la tecnología.
        </p>
        <FooterContactos />
      </article>
    </section>
  );
}
