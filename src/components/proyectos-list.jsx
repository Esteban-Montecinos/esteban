import React from 'react'
import Link from "next/link";
import ProyectoCard from './proyecto-card';
import { proyectos } from '../../constants';
export default function ProyectosList() {
  return (
    <section className='flex flex-col gap-2'>
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <div className='grid grid-cols-1 my-8'>
        {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} {...proyecto}/>
          ))}
        </div>
      </section>
  )
}
