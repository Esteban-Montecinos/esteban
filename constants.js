import { IconBrandGmail } from "@tabler/icons-react";
import { IconBrandLinkedin, IconBrandRedux, IconBrandTypescript, IconFileCv } from "@tabler/icons-react";
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
    id: "11",
    titulo: "Hue Wave",
    src: "/projects/huewave.webm",
    img: "/projects/huewave.webp",
    fecha: "01/10/2024",
    descripcion:
      "Generador de gradientes personalizados con colores de Tailwind CSS, crea, copia y comparte gradiente con soporte para clases de Tailwind y CSS, también puedes guardar tu gradiente como imagen y compartirlo como enlace y ver una preview del gradiente gracias a OpenGraph",
    git_url: "https://github.com/Esteban-Montecinos/hue-wave",
    web_url: "https://huewave.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "shadcn" },
      { nombre: "OpenGraph" },
      { nombre: "Zustand" },
      { nombre: "Sonner" },
      { nombre: "html-to-image" },
      { nombre: "js-base64" },
    ],
  },
  {
    id: "12",
    titulo: "3D Aim Trainer",
    src: "/projects/aim.webm",
    img: "/projects/aim.webp",
    fecha: "01/02/2024",
    descripcion:
      "Mini juego en el que hay que disparar al mayor número de esferas en 20 segundos, este juego lo realize con el objetivo de aprender Three.js y aprendí muchas cosas sobre la iluminación en un espacio 3D, la posición y rotación de objetos, cargado de modelos, texturas y órbitas.",
    git_url: "https://github.com/Esteban-Montecinos/3d-aim-trainer",
    web_url: "https://3d-aim-trainer.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Vite" },
      { nombre: "TailwindCSS" },
      { nombre: "Three.Js" },
      { nombre: "Zustand" },
      { nombre: "Cannon" },
      { nombre: "Drei" },
      { nombre: "Fiber" },
    ],
  },
  {
    id: "9",
    src: "/projects/github.webm",
    img: "/projects/github.webp",
    fecha: "12/29/2023",
    titulo: "Buscador Perfil GitHub",
    descripcion:
      "te permite buscar y explorar perfiles de desarrolladores en GitHub. Si estás interesado en conocer más acerca de los desarrolladores que utilizan esta popular plataforma de control de versiones, o si buscas talento para tu equipo, esta web utiliza la API de GitHub",
    git_url: "https://github.com/Esteban-Montecinos/github-profile",
    web_url: "https://buscador-perfil-github.vercel.app/Esteban-Montecinos",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "OpenGraph" },
      { nombre: "Framer Motion" },
      { nombre: "Lenis" },
    ],
  },
  {
    id: "7",
    src: "/projects/steam.webm",
    img: "/projects/steam.webp",
    fecha: "08/30/2023",
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
      { nombre: "Framer Motion" },
    ],
  },
  {
    id: "6",
    src: "/projects/clonx.webm",
    img: "/projects/clonx.webp",
    fecha: "08/07/2023",
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
      { nombre: "next-themes" },
    ],
  },
  {
    id: "8",
    src: "/projects/calculadora.webm",
    img: "/projects/calculadora.webp",
    fecha: "07/31/2023",
    titulo: "Calculadora de edad",
    descripcion:
      "Es una aplicación web moderna y fácil de usar que te permite calcular rápidamente la edad de una persona. Ya sea que necesites saber cuántos años tiene alguien, te brinda los años, meses y días exactos, la herramienta perfecta para hacerlo de manera rápida y precisa.",
    git_url: "https://github.com/Esteban-Montecinos/age-calculator-app",
    web_url: "https://age-calculator-app-dusky.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "Next.js" },
      { nombre: "TailwindCSS" },
      { nombre: "Zustand" },
    ],
  },
  {
    id: "2",
    src: "/projects/frontendmentor.webm",
    img: "/projects/frontendmentor.webp",
    fecha: "07/25/2023",
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
    id: "1",
    src: "/projects/preguntas.webm",
    img: "/projects/preguntas.webp",
    fecha: "07/24/2023",
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
];
export const educacion = [
  {
    id: "1",
    fecha: "Agosto 2021 - Diciembre 2022",
    nombre: "Inacap Sede Osorno",
    titulo: "Ingeniería En Informática",
    image_url: "/inacap.webm",
  },
  {
    id: "2",
    fecha: "Marzo 2019 - Junio 2021",
    nombre: "Inacap Sede Osorno",
    titulo: "Analista Programador",
    image_url: "/inacap.webm",
  },
  {
    id: "3",
    fecha: "Marzo 2017 - Diciembre 2018",
    nombre: "Instituto Comercial Osorno",
    titulo: "Programador Nivel Medio",
    image_url: "/ico.webm",
  },
];
export const tecnologias = [
  {
    nombre: "HTML5",
    icon: (
      <IconBrandHtml5 className="w-12 h-12" aria-label="HTML" stroke={1.2} />
    ),
  },
  {
    nombre: "CSS3",
    icon: <IconBrandCss3 className="w-12 h-12" aria-label="CSS" stroke={1.2} />,
  },
  {
    nombre: "TailwindCSS",
    icon: (
      <IconBrandTailwind
        className="w-12 h-12"
        aria-label="Tailwind"
        stroke={1.2}
      />
    ),
  },
  {
    nombre: "JavaScript",
    icon: (
      <IconBrandJavascript
        className="w-12 h-12"
        aria-label="JavaScript"
        stroke={1.2}
      />
    ),
  },
  {
    nombre: "TypeScript",
    icon: (
      <IconBrandTypescript
        className="w-12 h-12"
        aria-label="TypeScript"
        stroke={1.2}
      />
    ),
  },
  {
    nombre: "React",
    icon: (
      <IconBrandReact className="w-12 h-12" aria-label="React" stroke={1.2} />
    ),
  },
  {
    nombre: "Next",
    icon: (
      <IconBrandNextjs className="w-12 h-12" aria-label="Next" stroke={1.2} />
    ),
  },
  {
    nombre: "Redux",
    icon: (
      <IconBrandRedux className="w-12 h-12" aria-label="Next" stroke={1.2} />
    ),
  },
  {
    nombre: "Vite",
    icon: (
      <IconBrandVite className="w-12 h-12" aria-label="Vite" stroke={1.2} />
    ),
  },
  {
    nombre: "Android",
    icon: (
      <IconBrandAndroid
        className="w-12 h-12"
        aria-label="Android"
        stroke={1.2}
      />
    ),
  },
  {
    nombre: "React Native",
    icon: (
      <IconBrandReactNative
        className="w-12 h-12"
        aria-label="React Native"
        stroke={1.2}
      />
    ),
  },
  {
    nombre: "C#",
    icon: (
      <IconBrandCSharp className="w-12 h-12" aria-label="C#" stroke={1.2} />
    ),
  },
  {
    nombre: "PHP",
    icon: <IconBrandPhp className="w-12 h-12" aria-label="PHP" stroke={1.2} />,
  },
  {
    nombre: "Firebase",
    icon: (
      <IconBrandFirebase
        className="w-12 h-12"
        aria-label="Firebase"
        stroke={1.2}
      />
    ),
  },
  {
    nombre: "Supabase",
    icon: (
      <IconBrandSupabase
        className="w-12 h-12"
        aria-label="Supabase"
        stroke={1.2}
      />
    ),
  },
  {
    nombre: "NodeJs",
    icon: (
      <IconBrandNodejs className="w-12 h-12" aria-label="NodeJs" stroke={1.2} />
    ),
  },
  {
    nombre: "Git",
    icon: <IconBrandGit className="w-12 h-12" aria-label="Git" stroke={1.2} />,
  },
  {
    nombre: "GitHub",
    icon: (
      <IconBrandGithub className="w-12 h-12" aria-label="GitHub" stroke={1.2} />
    ),
  },
];
export const cv =
  "https://drive.google.com/file/d/1Geo11vo0uYd-1ECh8gW0DoMyNuq_Y6IU/view?usp=sharing";
export const LINKS = [
    {
      href: "https://github.com/Esteban-Montecinos",
      title: "GitHub",
      Icon: (props) => <IconBrandGithub {...props}/>,
    },
    {
      href: "https://www.linkedin.com/in/esteban-montecinos/",
      title: "LinkedIn",
      Icon: (props) => <IconBrandLinkedin {...props}/>,
    },
    {
      href: cv,
      title: "Currículum Vitae",
      Icon: (props) => <IconFileCv {...props}/>,
    },
    {
      href: "mailto:estebanmontecinos2001@gmail.com",
      title: "Gmail Esteban Montecinos",
      Icon: (props) => <IconBrandGmail {...props}/>,
    },
  ];