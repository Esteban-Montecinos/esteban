export default function TecnologiaCard({nombre, icon}) {
  return (
        <div title={nombre} className='flex flex-col items-center p-2 transition-colors border bg-zinc-400 dark:bg-black rounded-xl dark:border-zinc-800 border-zinc-400 bg-gradient-to-tl dark:from-black/80 from-zinc-50 dark:via-zinc-600/20 via-zinc-200/60 dark:to-black/80 to-zinc-50 dark:hover:bg-zinc-950 hover:bg-zinc-400/60 hover:dark:border-white/80 hover:border-black/80'>
            {icon}
            <p className='text-sm text-center '>{nombre}</p>
        </div>
  )
}