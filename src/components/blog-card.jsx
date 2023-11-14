'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { formatDate } from "../../lib/fecha-format";

export default function BlogCard({date,slug, title,description}) {
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
    <article
          onMouseMove={handleMouseMove}
            
            className="relative flex flex-col gap-2 p-3 transition-colors border group dark:bg-black bg-zinc-400 rounded-xl dark:border-zinc-800 border-zinc-400 bg-gradient-to-tl dark:from-black/80 from-zinc-50 dark:via-zinc-600/20 via-zinc-200/60 dark:to-black/80 to-zinc-50 dark:hover:bg-zinc-950 hover:bg-zinc-400/60 dark:hover:border-white/50 hover:border-black/50"
          >
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
            <div className="flex flex-col h-full gap-2">
              <time dateTime={date} className="text-sm dark:text-zinc-400 text-zinc-700">{formatDate(date)}</time>
              <Link href={`blog/${slug}`} className="text-lg font-semibold ">{title}</Link>
              <p className="mb-2 dark:text-zinc-200 text-zinc-800">{description}</p>
            </div>
            <Link
              href={`blog/${slug}`}
              className="flex items-center justify-center w-full p-2 text-sm transition-colors rounded-md justify-self-end dark:text-zinc-400 hover:text-black text-zinc-700 dark:bg-zinc-800/80 bg-zinc-400/60 dark:hover:text-zinc-100 dark:hover:bg-zinc-800"
            >
              Leer Más
            </Link>
          </article>
  )
}
