import ico from "@/assets/ico.webp"
import inacap from "@/assets/inacap.webp"
import { IconBrandRedux, IconBrandTypescript } from "@tabler/icons-react";
import {
  IconBrandGithub,
  IconBrandAndroid,
  IconBrandNextjs,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandSupabase,
  IconBrandVite,
  IconBrandPhp,
  IconBrandCSharp,
} from "@tabler/icons-react";

export const proyectos = [
  {
    id: "2",
    titulo: "Frontend Mentor Challenges",
    descripcion:
      "Se ha desarrollado una aplicación que realiza el proceso de extracción de datos (scraping) desde el sitio web Frontend Mentor, con el propósito de obtener los retos (challenges) disponibles. Esta herramienta permite la funcionalidad de otorgar 'Me gusta' a los proyectos seleccionados para su futura realización.",
    git_url: "https://github.com/Esteban-Montecinos/frontend-mentor-challenges",
    web_url: "https://frontendmentor-esteban.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "Cheerio" },
    ],
  },
  {
    id: "6",
    titulo: "Clon de Twitter | *MNTree",
    descripcion:
      "Plataforma de redes sociales que emplea el protocolo OAuth de GitHub para autenticar a los usuarios, brindando la capacidad de compartir contenido y dar 'Me gusta' a las diversas publicaciones.",
    git_url: "https://github.com/Esteban-Montecinos/mntree",
    web_url: "https://mntree.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "Supabase" },
    ],
  },
  {
    id: "1",
    titulo: "Preguntas anónimas",
    descripcion:
      "Aplicación de preguntas anónimas, una aplicación con una interfáz similar a NGL. A diferencia de NGL, esta es una aplicación de preguntas anónimas donde todas las preguntas llegan al muro principal.",
    git_url: "https://github.com/Esteban-Montecinos/preguntas-app",
    web_url: "https://preguntas-app.vercel.app/",
    etiquetas: [
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "OpenGraph" },
      { nombre: "Supabase" },
      { nombre: "ToastifyJS" },
      { nombre: "React" },
    ],
  },
  {
    id: "7",
    titulo: "Steam Finder Connect",
    descripcion:
      "Una aplicación web desarrollada con Next.js y web scraping para proporcionar a los usuarios una interfaz amigable para buscar perfiles de usuarios en la plataforma Steam. pueden buscar perfiles con su respectivo ID de steam o por el vanity name",
    git_url: "https://github.com/Esteban-Montecinos/steam-finder",
    web_url: "https://steam-finder-connect.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "Cheerio" },
    ],
  },
  {
    id: "8",
    titulo: "Calculadora de edad",
    descripcion:
      "Es una aplicación web moderna y fácil de usar que te permite calcular rápidamente la edad de una persona. Ya sea que necesites saber cuántos años tiene alguien, te brinda los años, meses y días exactos, la herramienta perfecta para hacerlo de manera rápida y precisa.",
    git_url: "https://github.com/Esteban-Montecinos/age-calculator-app",
    web_url: "https://age-calculator-app-dusky.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
    ],
  },
  {
    id: "9",
    titulo: "GitHub Finder",
    descripcion:
      "te permite buscar y explorar perfiles de desarrolladores en GitHub. Si estás interesado en conocer más acerca de los desarrolladores que utilizan esta popular plataforma de control de versiones, o si buscas talento para tu equipo, esta web utiliza la API de GitHub",
    git_url: "https://github.com/Esteban-Montecinos/githubfinder",
    web_url: "https://github-finder-connect.vercel.app/esteban-montecinos",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "OpenGraph" },
      { nombre: "ToastifyJS" },
    ],
  },
  {
    id: "5",
    titulo: "*MNTodo List",
    descripcion:
      "Aplicación de gestión de tareas que posibilita la creación y seguimiento de una lista de tareas pendientes, permitiendo tanto la adición de nuevas tareas como la marcación de las mismas como completadas.",
    git_url: "https://github.com/Esteban-Montecinos/todo-list-app",
    web_url: "https://mntodo-list.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "Zustand" },
    ],
  },
  {
    id: "10",
    titulo: "Generador de consejos",
    descripcion:
      "Diseño sacado de FrontendMentor challenges, el cual utiliza una API que genera consejos de manera aleatoria.",
    git_url: "https://github.com/Esteban-Montecinos/advice-generator-app",
    web_url: "https://advice-generator-app-three-rose.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
    ],
  },
];
export const educacion = [
  {
    id: "1",
    fecha: "Agosto 2021 - Diciembre 2022",
    nombre: "Inacap sede Osorno",
    titulo: "Ingeniería en informática",
    image_url: inacap.src
      
  },
  {
    id: "2",
    fecha: "Marzo 2019 - Junio 2021",
    nombre: "Inacap sede Osorno",
    titulo: "Analista programador",
    image_url: inacap.src
      
  },
  {
    id: "3",
    fecha: "Marzo 2017 - Diciembre 2018",
    nombre: "Instituto comercial Osorno",
    titulo: "Programador nivel medio",
    image_url: ico.src
      
  },
];
export const tecnologias = [
  {
    nombre: "HTML5",
    icon: <IconBrandHtml5 className="w-12 h-12" aria-label="HTML" stroke={1.2}/>,
  },
  {
    nombre: "CSS3",
    icon: <IconBrandCss3 className="w-12 h-12" aria-label="CSS" stroke={1.2}/>,
  },
  {
    nombre: "TailwindCSS",
    icon: <IconBrandTailwind className="w-12 h-12" aria-label="Tailwind" stroke={1.2}/>,
  },
  {
    nombre: "JavaScript",
    icon: <IconBrandJavascript className="w-12 h-12" aria-label="JavaScript" stroke={1.2}/>,
  },
  {
    nombre: "TypeScript",
    icon: <IconBrandTypescript className="w-12 h-12" aria-label="TypeScript" stroke={1.2}/>,
  },
  {
    nombre: "React",
    icon: <IconBrandReact className="w-12 h-12" aria-label="React" stroke={1.2}/>,
  },
  {
    nombre: "Next",
    icon: <IconBrandNextjs className="w-12 h-12" aria-label="Next" stroke={1.2}/>,
  },
  {
    nombre: "Redux",
    icon: <IconBrandRedux className="w-12 h-12" aria-label="Next" stroke={1.2}/>,
  },
  {
    nombre: "Vite",
    icon: <IconBrandVite className="w-12 h-12" aria-label="Vite" stroke={1.2}/>,
  },
  {
    nombre: "Android",
    icon: <IconBrandAndroid className="w-12 h-12" aria-label="Android" stroke={1.2}/>,
  },
  {
    nombre: "React Native",
    icon: (
      <IconBrandReactNative className="w-12 h-12" aria-label="React Native" stroke={1.2}/>
    ),
  },
  {
    nombre: "C#",
    icon: <IconBrandCSharp className="w-12 h-12" aria-label="C#" stroke={1.2}/>,
  },
  {
    nombre: "PHP",
    icon: <IconBrandPhp className="w-12 h-12" aria-label="PHP" stroke={1.2}/>,
  },
  {
    nombre: "Firebase",
    icon: <IconBrandFirebase className="w-12 h-12" aria-label="Firebase" stroke={1.2}/>,
  },
  {
    nombre: "Supabase",
    icon: <IconBrandSupabase className="w-12 h-12" aria-label="Supabase" stroke={1.2}/>,
  },
  {
    nombre: "NodeJs",
    icon: <IconBrandNodejs className="w-12 h-12" aria-label="NodeJs" stroke={1.2}/>,
  },
  {
    nombre: "Git",
    icon: <IconBrandGit className="w-12 h-12" aria-label="Git" stroke={1.2}/>,
  },
  {
    nombre: "GitHub",
    icon: <IconBrandGithub className="w-12 h-12" aria-label="GitHub" stroke={1.2}/>,
  },
];
export const cv = "https://drive.google.com/file/d/1DA7F9lu7xjOCXgAdiSoehyGcD2jO1NjL/view?usp=sharing"