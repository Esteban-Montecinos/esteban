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
    <Card className="flex flex-col w-full p-1 transition-colors border bg-zinc-400 dark:bg-black dark:border-zinc-800 border-zinc-400 bg-gradient-to-tl dark:from-black/80 from-zinc-50 dark:via-zinc-600/20 via-zinc-200/60 dark:to-black/80 to-zinc-50 dark:hover:bg-zinc-950 hover:bg-zinc-400/60 dark:hover:border-white hover:border-black">
      <CardHeader className="px-2 pb-2">
        <h2 className="text-2xl font-bold text-black dark:text-white">{titulo}</h2>
      </CardHeader>
      <CardBody className="justify-between h-full p-2 text-small dark:text-zinc-400 text-zinc-700">
        <p>{descripcion}</p>
        <div className="flex flex-row flex-wrap max-w-xl gap-1">
          {etiquetas.map(({ nombre }) => (
            <Chip
              key={nombre}
              variant="flat"
              size="sm"
              radius="sm"
            >
              {nombre}
            </Chip>
          ))}
        </div>
      </CardBody>
      <CardFooter className="justify-between gap-4 px-2">
        <a
          className="w-full p-2 text-sm text-center transition-colors rounded-md dark:text-zinc-400 text-zinc-700 dark:bg-zinc-800/80 bg-zinc-400/60 dark:hover:text-white hover:text-black dark:hover:bg-zinc-800 hover:bg-zinc-400"
          href={web_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          className="w-full p-2 text-sm text-center transition-colors rounded-md dark:text-zinc-400 text-zinc-700 dark:bg-zinc-800/80 bg-zinc-400/60 dark:hover:text-white hover:text-black dark:hover:bg-zinc-800 hover:bg-zinc-400"
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
