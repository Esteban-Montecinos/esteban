import EducacionCard from "./educacion-card";
export default function EducacionList({ educacion }) {
  return (
    <section className="flex flex-col w-full gap-2">
      <h2 className="text-3xl font-bold">Educación</h2>
      <article className="flex flex-col flex-1 w-full gap-6 my-8">
        {educacion.map(({ id, fecha, nombre, titulo, image_url }) => (
          <EducacionCard
            fecha={fecha}
            titulo={titulo}
            nombre={nombre}
            image_url={image_url}
            key={id}
          />
        ))}
      </article>
    </section>
  );
}
