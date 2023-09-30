import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

export default function ProyectoCard({
  titulo,
  descripcion,
  git_url,
  web_url,
  etiquetas,
}) {
  return (
    <Card className="flex flex-col w-full p-1 transition-colors bg-black border border-zinc-800 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 hover:bg-zinc-950">
      <CardHeader className="px-4">
        <h4 className="text-2xl font-bold text-white">{titulo}</h4>
      </CardHeader>
      <CardBody className="justify-between h-full px-4 py-0 text-small text-zinc-400">
        <p>{descripcion}</p>
        <div className="flex flex-row flex-wrap max-w-xl gap-1">
          {etiquetas.map(({ nombre }) => (
            <Chip
              key={nombre}
              size="sm"
              radius="sm"
              color="warning"
              variant="dot"
            >
              {nombre}
            </Chip>
          ))}
        </div>
      </CardBody>
      <CardFooter className="justify-between gap-2 px-0">
        <a
          className="w-full p-2 text-sm text-center transition-colors rounded-md text-zinc-400 bg-zinc-800/80 hover:text-zinc-100 hover:bg-zinc-800"
          href={web_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          className="w-full p-2 text-sm text-center transition-colors rounded-md text-zinc-400 bg-zinc-800/80 hover:text-zinc-100 hover:bg-zinc-800"
          href={git_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio
        </a>
      </CardFooter>
    </Card>
  );
}
