"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { formatDate } from "../../lib/fecha-format";
import { useRef } from "react";

export default function ProyectoCard({
  src,
  titulo,
  fecha,
  descripcion,
  git_url,
  web_url,
  etiquetas,
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const videoRed = useRef()

  function onMouseOver(){
    videoRed.current.play();
  }

  function onMouseOut(){
    videoRed.current.pause();
  }

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <article className="flex flex-col w-full gap-3 transition-all group" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <div
        onMouseMove={handleMouseMove}
        className="relative flex flex-col transition-all duration-75 group/img group-hover:-translate-y-2"
      >
        <video
        ref={videoRed}
          preload="metadata"
          muted
          loop
          className="object-cover border shadow-2xl rounded-xl size-full aspect-video dark:border-white/10 border-black/10"
        >
          <source src={`${src}#t=1.5`} type="video/webm" />
        </video>
        <motion.div
          className="absolute transition duration-300 opacity-0 pointer-events-none group-hover/img:opacity-100 -inset-px rounded-xl"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              240px circle at ${mouseX}px ${mouseY}px,
              rgba(132, 204, 22, 0.1),
              transparent
            )
          `,
          }}
        />
        <motion.div
          className="absolute transition duration-300 opacity-100 pointer-events-none group-hover/img:opacity-50 -inset-px rounded-xl"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              240px circle at ${mouseX}px ${mouseY}px,
              rgba(132, 204, 22, 0.15),
              transparent
            )
          `,
          }}
        />
        <div className="absolute bottom-0 right-0 flex items-end justify-end gap-2 p-2 opacity-100 md:opacity-0 group-hover:opacity-100">
          <a
            className="px-3 py-1 inline-flex bg-[linear-gradient(110deg,rgb(39,39,42),45%,#4D4B4B,55%,rgb(39,39,42))] bg-[length:250%_100%] hover:animate-background-shine rounded-full w-fit group/demo border border-lime-400/20 text-white uppercase text-sm"
            href={web_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
            <span className="inline-flex ml-2 transition-transform group-hover/demo:-rotate-45 group-hover/demo:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </a>
          <a
            className="px-3 py-1 inline-flex bg-[linear-gradient(110deg,rgb(39,39,42),45%,#4D4B4B,55%,rgb(39,39,42))] bg-[length:250%_100%] hover:animate-background-shine rounded-full w-fit group/demo border border-lime-400/20 text-white uppercase text-sm"
            href={git_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
            <span className="inline-flex ml-2 transition-transform group-hover/demo:-rotate-45 group-hover/demo:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <time
          dateTime={fecha}
          className="text-xs dark:text-lime-400 text-lime-800"
        >
          {formatDate(fecha)}
        </time>
        <div className="flex flex-row flex-wrap max-w-xl gap-1">
          {etiquetas.map(({ nombre }) => (
            <span
              key={nombre}
              className="inline-flex px-3 py-1 text-xs font-light rounded-full bg-neutral dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-200 text-zinc-700"
            >
              {nombre}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold text-black dark:text-white text-balance">
          {titulo}
        </h2>
        <p className="text-xs dark:text-zinc-300 text-zinc-700 text-pretty">
          {descripcion}
        </p>
      </div>
    </article>
  );
}
