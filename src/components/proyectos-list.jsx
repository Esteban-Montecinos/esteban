import React from 'react'
import Link from "next/link";
import ProyectoCard from './proyecto-card';
import { proyectos } from '../../constants';
export default function ProyectosList() {
  return (
    <section className='flex flex-col min-h-screen gap-2'>
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <p className="text-sm dark:text-zinc-400 text-zinc-700">
          Aquí hay algunos de mis proyectos, puedes verlos todos en mi <Link href="https://github.com/Esteban-Montecinos" className="underline" target="_blank">GitHub.</Link>
        </p>
        <div className='grid grid-cols-1 gap-8 my-8 lg:grid-cols-2'>
        {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} {...proyecto}/>
          ))}
        </div>
      </section>
  )
}
