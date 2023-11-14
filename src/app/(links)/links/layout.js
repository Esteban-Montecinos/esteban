import "../../globals.css";
import { GeistSans } from 'geist/font'
import { Providers } from "@/app/providers";
import ThemeSwitcher from "@/app/theme-swicher";
export const metadata = {
  title: "Enlaces | Esteban Montecinos",
  description: "Enlaces de Esteban Montecinos",
  openGraph: {
    title: 'Enlaces | Esteban Montecinos',
    description: 'Enlaces de Esteban Montecinos',
    url: 'https://estebanmontecinos.dev',
    siteName: 'Esteban Montecinos',
    images: [
      {
        url: '/links-qr-code.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${GeistSans.className} dark:bg-black min-h-screen`}
      >
      <Providers>
        { children }
        <footer className="mt-4 border-t dark:border-zinc-800 border-zinc-400">
      <nav className="flex flex-col max-w-5xl gap-4 px-8 m-auto my-9">
        <div className="flex flex-row items-center justify-center">
          <ThemeSwitcher />
        </div>
        <p className="self-center text-center text-sm [text-wrap:balance]">
          Desarrollado con ♥ por Esteban Montecinos.
        </p>
      </nav>
    </footer>
      </Providers>
        </body>
    </html>
  );
}
