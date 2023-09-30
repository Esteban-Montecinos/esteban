import { Card, CardBody } from "@nextui-org/card";
import {Image} from "@nextui-org/image";

export default function EducacionCard({ fecha, nombre, titulo, image_url }) {
  return (
    <Card className="flex flex-col flex-1 w-full h-full p-4 transition-colors bg-black border border-zinc-800 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 hover:bg-zinc-950">
      <CardBody className="flex flex-col items-center justify-center md:justify-between md:flex-row">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Image
            src={image_url}
            className="w-20 h-20"
            alt={`Logo de ${nombre}`}
          />
          <div className="flex flex-col">
            <p className="text-lg font-bold leading-relaxed tracking-wide text-white">
              {titulo}
            </p>
            <p className="text-sm leading-relaxed tracking-wide text-zinc-400">
              {nombre}
            </p>
          </div>
        </div>
        {fecha}
      </CardBody>
    </Card>
  );
}
