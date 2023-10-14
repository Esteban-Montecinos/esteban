export default function TecnologiaCard({nombre, icon}) {
  return (
        <div title={nombre} className='flex flex-col items-center p-2 transition-colors bg-black border rounded-xl border-zinc-800 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 hover:bg-zinc-950 hover:border-white'>
            {icon}
            <p className='text-sm text-center '>{nombre}</p>
        </div>
  )
}