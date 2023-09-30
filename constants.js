import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail,
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
    id: "1",
    titulo: "Preguntas anónimas",
    descripcion:
      "Aplicación de preguntas anónimas, una aplicación con una interfáz similar a NGL. A diferencia de NGL, esta es una aplicación de preguntas anónimas donde todas las preguntas llegan al muro principal.",
    git_url: "https://github.com/Esteban-Montecinos/preguntas-app",
    web_url: "https://preguntas-app.vercel.app/",
    etiquetas: [
      { nombre: "NextJS" },
      { nombre: "TailwindCSS" },
      { nombre: "OpenGraph" },
      { nombre: "Supabase" },
      { nombre: "ToastifyJS" },
      { nombre: "React" },
    ],
  },
  {
    id: "2",
    titulo: "Frontend Mentor Challenges",
    descripcion:
      "Se ha desarrollado una aplicación que realiza el proceso de extracción de datos (scraping) desde el sitio web Frontend Mentor, con el propósito de obtener los retos (challenges) disponibles. Esta herramienta permite la funcionalidad de otorgar 'Me gusta' a los proyectos seleccionados para su futura realización.",
    git_url: "https://github.com/Esteban-Montecinos/frontend-mentor-challenges",
    web_url: "https://frontendmentor-esteban.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "NextJS" },
      { nombre: "TailwindCSS" },
      { nombre: "Cheerio" },
    ],
  },
  {
    id: "3",
    titulo: "Comida al azar",
    descripcion:
      "Esta aplicación recupera desde una API una receta culinaria completa junto con la lista de sus ingredientes asociados.",
    git_url: "https://github.com/Esteban-Montecinos/random-meal",
    web_url: "https://random-meal-peach.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "NextJS" },
      { nombre: "TailwindCSS" },
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
      { nombre: "NextJS" },
      { nombre: "TailwindCSS" },
      { nombre: "Zustand" },
    ],
  },
  {
    id: "6",
    titulo: "*MNTree",
    descripcion:
      "Plataforma de redes sociales que emplea el protocolo OAuth de GitHub para autenticar a los usuarios, brindando la capacidad de compartir contenido y dar 'Me gusta' a las diversas publicaciones.",
    git_url: "https://github.com/Esteban-Montecinos/mntree",
    web_url: "https://mntree.vercel.app/",
    etiquetas: [
      { nombre: "React" },
      { nombre: "NextJS" },
      { nombre: "TailwindCSS" },
      { nombre: "Supabase" },
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
      { nombre: "NextJS" },
      { nombre: "TailwindCSS" },
      { nombre: "Cheerio" },
    ],
  },
];
export const educacion = [
  {
    id: "1",
    fecha: "Agosto 2021 - Diciembre 2022",
    nombre: "Inacap sede Osorno",
    titulo: "Ingeniería en informática",
    image_url:
      "https://jvxhgyidasjvhhfycxwi.supabase.co/storage/v1/object/public/experiencia/inacap.webp",
  },
  {
    id: "2",
    fecha: "Marzo 2019 - Junio 2021",
    nombre: "Inacap sede Osorno",
    titulo: "Analista programador",
    image_url:
      "https://jvxhgyidasjvhhfycxwi.supabase.co/storage/v1/object/public/experiencia/inacap.webp",
  },
  {
    id: "3",
    fecha: "Marzo 2017 - Diciembre 2018",
    nombre: "Instituto comercial Osorno",
    titulo: "Programador nivel medio",
    image_url:
      "https://jvxhgyidasjvhhfycxwi.supabase.co/storage/v1/object/public/experiencia/ico.webp",
  },
];
export const tecnologias = [
  {
    nombre: "HTML5",
    icon: <IconBrandHtml5 className="w-20 h-20" aria-label="HTML" />,
  },
  {
    nombre: "CSS3",
    icon: <IconBrandCss3 className="w-20 h-20" aria-label="CSS" />,
  },
  {
    nombre: "TailwindCSS",
    icon: <IconBrandTailwind className="w-20 h-20" aria-label="Tailwind" />,
  },
  {
    nombre: "JavaScript",
    icon: <IconBrandJavascript className="w-20 h-20" aria-label="JavaScript" />,
  },
  {
    nombre: "React",
    icon: <IconBrandReact className="w-20 h-20" aria-label="React" />,
  },
  {
    nombre: "Next",
    icon: <IconBrandNextjs className="w-20 h-20" aria-label="Next" />,
  },
  {
    nombre: "Vite",
    icon: <IconBrandVite className="w-20 h-20" aria-label="Vite" />,
  },
  {
    nombre: "Android",
    icon: <IconBrandAndroid className="w-20 h-20" aria-label="Android" />,
  },
  {
    nombre: "React Native",
    icon: (
      <IconBrandReactNative className="w-20 h-20" aria-label="React Native" />
    ),
  },
  {
    nombre: "C#",
    icon: <IconBrandCSharp className="w-20 h-20" aria-label="C#" />,
  },
  {
    nombre: "PHP",
    icon: <IconBrandPhp className="w-20 h-20" aria-label="PHP" />,
  },
  {
    nombre: "Firebase",
    icon: <IconBrandFirebase className="w-20 h-20" aria-label="Firebase" />,
  },
  {
    nombre: "Supabase",
    icon: <IconBrandSupabase className="w-20 h-20" aria-label="Supabase" />,
  },
  {
    nombre: "NodeJs",
    icon: <IconBrandNodejs className="w-20 h-20" aria-label="NodeJs" />,
  },
  {
    nombre: "Git",
    icon: <IconBrandGit className="w-20 h-20" aria-label="Git" />,
  },
  {
    nombre: "GitHub",
    icon: <IconBrandGithub className="w-20 h-20" aria-label="GitHub" />,
  },
];
export const contactos = [
  {
    nombre: "LinkedIn",
    icono: <IconBrandLinkedin className="w-20 h-20" aria-label="LinkedIn" />,
    url: "https://www.linkedin.com/in/esteban-montecinos/",
    user: "esteban-montecinos",
  },
  {
    nombre: "GitHub",
    icono: <IconBrandGithub className="w-20 h-20" aria-label="GitHub" />,
    url: "https://github.com/Esteban-Montecinos",
    user: "Esteban-Montecinos",
  },
  {
    nombre: "Correo electrónico",
    icono: (
      <IconBrandGmail className="w-20 h-20" aria-label="Correo electrónico" />
    ),
    url: "mailto:estebanmontecinos2001@gmail.com",
    user: "estebanmontecinos2001",
  },
];
export const cv = "https://drive.google.com/file/d/1iC8Ipp2WAWzQWqabJQgthpb4--a-dkqT/view?usp=sharing"