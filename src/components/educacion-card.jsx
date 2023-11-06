import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
export default function EducacionCard({ fecha, nombre, titulo, image_url}) {
  return (
    <Card className="flex flex-col w-full h-full p-4 transition-colors border bg-zinc-400 dark:bg-black dark:border-zinc-800 border-zinc-400 bg-gradient-to-tl dark:from-black/80 from-zinc-50 dark:via-zinc-600/20 via-zinc-200/60 dark:to-black/80 to-zinc-50 dark:hover:bg-zinc-950 hover:bg-zinc-400/60 dark:hover:border-white hover:border-black">
      <CardBody className="flex flex-col items-center justify-center md:justify-between md:flex-row">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Image
            radius="none"
            src={image_url}
            loading="lazy"
            className="object-cover aspect-square"
            alt={`Logo de ${nombre}`}
            width={80}
            height={80}
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold leading-relaxed tracking-wide dark:text-white">
              {titulo}
            </p>
            <p className="text-sm leading-relaxed tracking-wide dark:text-zinc-400 text-zinc-700">
              {nombre}
            </p>
          </div>
        </div>
        <time>{fecha}</time>
      </CardBody>
    </Card>
  );
}
