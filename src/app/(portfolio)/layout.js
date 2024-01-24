import "../globals.css";
import { GeistSans } from "geist/font";
import { Providers } from "../providers";
import NavigationMenu from "../../components/navigation-menu";
import Footer from "@/components/footer";

export const metadata = {
  title: "Portafolio de Esteban Montecinos | Desarrollador y Programador Web",
  description:
    "Ingeniero en Informática y Desarrollador Full Stack con React, Next.js y Tailwind CSS",
  openGraph: {
    title: "Portafolio de Esteban Montecinos | Desarrollador y Programador Web",
    description:
      "Ingeniero en Informática y Desarrollador Full Stack con React, Next.js y Tailwind CSS",
    siteName: "Esteban Montecinos",
    images: [
      {
        url: "/esteban-avatar.webp",
        width: 500,
        height: 500,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} min-h-screen dark:text-white text-black`}
      >
        <div className="fixed left-0 top-0 -z-10 h-screen w-screen bg-zinc-200 dark:bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(132,204,22,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(63,98,18,0.3),rgba(255,255,255,0))]"></div>
        <Providers>
          <NavigationMenu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
