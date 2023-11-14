'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

export default function ProyectoCard({
  titulo,
  descripcion,
  git_url,
  web_url,
  etiquetas,
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <Card onMouseMove={handleMouseMove} className="relative flex flex-col w-full p-1 transition-colors border group bg-zinc-400 dark:bg-black bg-gradient-to-tl dark:from-black/80 from-zinc-50 dark:via-zinc-600/20 via-zinc-200/60 dark:to-black/80 to-zinc-50 dark:hover:bg-zinc-950 hover:bg-zinc-400/60 dark:border-zinc-800 border-zinc-400 hover:dark:border-white/80 hover:border-black/80">
      <motion.div
        className="absolute transition duration-300 opacity-0 pointer-events-none -inset-px rounded-xl group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(132, 204, 22, 0.1),
              transparent 60%
            )
          `,
        }}
      />
      <CardHeader className="px-2 pb-2">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          {titulo}
        </h2>
      </CardHeader>
      <CardBody className="justify-between h-full p-2 text-small dark:text-zinc-400 text-zinc-700">
        <p className="dark:text-zinc-300 text-zinc-700">{descripcion}</p>
        <div className="flex flex-row flex-wrap max-w-xl gap-1">
          {etiquetas.map(({ nombre }) => (
            <Chip
              key={nombre}
              variant="flat"
              size="sm"
              radius="sm"
              classNames={{
                base: "dark:bg-zinc-800 bg-white",
                content: "dark:text-white text-black",
              }}
            >
              {nombre}
            </Chip>
          ))}
        </div>
      </CardBody>
      <CardFooter className="justify-between gap-4 px-2">
        <a
          className="w-full p-2 text-sm text-center transition-colors rounded-md dark:text-zinc-400 text-zinc-700 dark:bg-zinc-800 bg-zinc-400 dark:hover:text-white hover:text-black dark:hover:bg-zinc-800 hover:bg-zinc-400"
          href={web_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          className="w-full p-2 text-sm text-center transition-colors rounded-md dark:text-zinc-400 text-zinc-700 dark:bg-zinc-800 bg-zinc-400 dark:hover:text-white hover:text-black dark:hover:bg-zinc-800 hover:bg-zinc-400"
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
{/* <div
  className="relative max-w-md px-8 py-16 bg-gray-900 border shadow-2xl group rounded-xl border-white/10"
  onMouseMove={handleMouseMove}
>
  <motion.div
    className="absolute transition duration-300 opacity-0 pointer-events-none -inset-px rounded-xl group-hover:opacity-100"
    style={{
      background: useMotionTemplate`
        radial-gradient(
          650px circle at ${mouseX}px ${mouseY}px,
          rgba(14, 165, 233, 0.15),
          transparent 80%
        )
      `,
    }}
  />
  <div>
    <h3 className="text-base font-semibold leading-7 text-sky-500">
      Byline
    </h3>
    <div className="flex items-center mt-2 gap-x-2">
      <span className="text-5xl font-bold tracking-tight text-white">
        Hero
      </span>
    </div>
    <p className="mt-6 text-base leading-7 text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis
      illum eum ullam nostrum atque quam.
    </p>
  </div>
</div> */}
