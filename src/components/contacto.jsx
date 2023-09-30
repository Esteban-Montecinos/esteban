import { Card, CardBody, CardHeader } from "@nextui-org/card";
export default function Contacto({ contactos }) {
  return (
    <section className="flex flex-col w-full gap-2">
      <h2 className="text-3xl font-bold">Contacto</h2>
      <section className="grid w-full grid-cols-1 gap-4 mt-8 md:grid-cols-3">
        {contactos.map(({ nombre, url, user, icono }) => (
          <a key={nombre} href={url} target="_blank" rel="noreferrer">
            <Card className="flex flex-col w-full h-full p-4 transition-colors bg-black border border-zinc-800 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 hover:bg-zinc-950">
              <CardHeader className="justify-center">
                <div className="p-2 border rounded-full bg-zinc-800 border-zinc-500">
                  {icono}
                </div>
              </CardHeader>
              <CardBody className="text-center">
                <p className="text-lg font-bold leading-relaxed tracking-wide text-white">
                  {user}
                </p>
                <p className="text-sm leading-relaxed tracking-wide text-zinc-400">
                  {nombre}
                </p>
              </CardBody>
            </Card>
          </a>
        ))}
      </section>
    </section>
  );
}
