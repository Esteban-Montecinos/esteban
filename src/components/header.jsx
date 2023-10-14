import FooterContactos from "./footer-contactos";

export default function Header() {
  return (
    <section className="flex flex-row w-full justify-between h-[calc(100vh-100px)]">
      <article className="flex flex-col mt-40 md:mt-60">
        <header className="my-4">
          <h1 className="text-4xl mb-4 font-normal [text-wrap:balance] md:text-6xl ">
            Hola, mi nombre es <strong>Esteban Montecinos.</strong>
          </h1>
          <h3 className="text-xl font-normal [text-wrap:balance] md:text-2xl ">
            Ingeniero en Informática y desarrollador <strong>Front-end.</strong>
          </h3>
        </header>

        <p className="text-sm leading-relaxed [text-wrap:balance] tracking-wide text-left md:text-lg text-zinc-400">
          Me gusta trabajar con <strong>React, Next.js y TailwindCSS</strong>.
          Mi enfoque está en crear <strong>experiencias</strong> de usuario
          intuitivas y receptivas que mejoren la interacción entre las personas
          y la tecnología.
        </p>
        <FooterContactos />
      </article>
    </section>
  );
}
