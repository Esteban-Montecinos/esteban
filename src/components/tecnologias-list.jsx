
import { tecnologias } from '../../constants'
import TecnologiaCard from './tecnologia-card'
export default function TecnologiasList() {
    
  return (
    <section className='flex flex-col w-full'>
        <h2 className="text-3xl font-bold">Tecnologías</h2>
        <article className='grid gap-6 my-8 grid-cols-[repeat(auto-fit,minmax(105px,1fr))]'>
        {tecnologias.map(({nombre, icon}) => (
            <TecnologiaCard nombre={nombre} icon={icon} key={nombre}/>
        ))}
        </article>
    </section>
  )
}
