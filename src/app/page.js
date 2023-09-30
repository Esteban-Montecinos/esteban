import ProyectosList from "@/components/proyectos-list";
import { Divider } from "@nextui-org/divider";
import { contactos, educacion, proyectos, tecnologias } from "../../constants";
import EducacionList from "@/components/educacion-list";
import TecnologiasList from "@/components/tecnologias-list";
import Contacto from "@/components/contacto";
import Header from "@/components/header";
export default function Home() {
  return (
    <main className="flex flex-col flex-wrap items-start w-full gap-8 px-4 py-10 mx-auto max-w-7xl">
      <Header/>
      <Divider className="my-4" />
      <ProyectosList proyectos={proyectos} />
      <Divider className="my-4" />
      <TecnologiasList tecnologias={tecnologias} />
      <Divider className="my-4" />
      <EducacionList educacion={educacion} />
      <Divider className="my-4" />
      <Contacto contactos={contactos} />
    </main>
  );
}
