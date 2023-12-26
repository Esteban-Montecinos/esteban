import "../globals.css";
import { GeistSans } from 'geist/font'
import { Providers } from "../providers";
import NavigationMenu from "../../components/navigation-menu";
import Footer from "@/components/footer";


export const metadata = {
  title: "Portafolio de Esteban Montecinos | Desarrollador y Programador Web",
  description: "Ingeniero en Informática y Desarrollador Full Stack con React, Next.js y Tailwind CSS",
  openGraph: {
    title: "Portafolio de Esteban Montecinos | Desarrollador y Programador Web",
    description: "Ingeniero en Informática y Desarrollador Full Stack con React, Next.js y Tailwind CSS",
    url: "https://estebanmontecinos.dev",
    siteName: "Esteban Montecinos",
    images: [
      {
        url: "/esteban-avatar.webp",
        width: 648,
        height: 648,
      },
    ],
    locale: "es_CL",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${GeistSans.className} min-h-screen dark:text-white text-black`}
      >
         <div className="absolute top-0 w-full h-full bg-white -z-10 dark:bg-black">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full dark:bg-lime-800 bg-lime-400 opacity-50 blur-[100px]"></div>
        </div>
        <Providers>
          <NavigationMenu/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
