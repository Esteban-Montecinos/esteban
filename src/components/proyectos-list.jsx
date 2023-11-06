import React from 'react'
import Link from "next/link";
import ProyectoCard from './proyecto-card';
export default function ProyectosList({proyectos}) {
  return (
    <section className='flex flex-col min-h-screen gap-2'>
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <p className="text-sm dark:text-zinc-400 text-zinc-700">
          Aquí hay algunos de mis proyectos, puedes verlos todos en mi <Link href="https://github.com/Esteban-Montecinos" className="underline" target="_blank">GitHub.</Link>
        </p>
        <div className='grid grid-cols-1 gap-6 my-8 md:grid-cols-2 lg:grid-cols-3'>
        {proyectos.map(({id, titulo, descripcion, git_url, web_url, etiquetas}) => (
            <ProyectoCard key={id} titulo={titulo} descripcion={descripcion} git_url={git_url} web_url={web_url} etiquetas={etiquetas}/>
          ))}
        </div>
      </section>
  )
}
