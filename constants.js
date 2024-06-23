
import { IconBrandLinkedin, IconBrandRedux, IconBrandTypescript } from "@tabler/icons-react";
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
  }
];
export const educacion = [
  {
    id: "1",
    fecha: "Agosto 2021 - Diciembre 2022",
    nombre: "Inacap Sede Osorno",
    titulo: "Ingeniería En Informática",
    image_url: "/inacap.webp",
  },
  {
    id: "2",
    fecha: "Marzo 2019 - Junio 2021",
    nombre: "Inacap Sede Osorno",
    titulo: "Analista Programador",
    image_url: "/inacap.webp",
  },
  {
    id: "3",
    fecha: "Marzo 2017 - Diciembre 2018",
    nombre: "Instituto Comercial Osorno",
    titulo: "Programador Nivel Medio",
    image_url: "/ico.webp",
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
    }
  ];