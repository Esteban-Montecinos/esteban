import "../globals.css";
import { GeistSans } from 'geist/font'
import { Providers } from "../providers";
import NavigationMenu from "../../components/navigation-menu";
import Footer from "@/components/footer";


export const metadata = {
  title: "Esteban Montecinos",
  description: "Portafolio de Esteban Montecinos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${GeistSans.className} bg-black min-h-screen bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 text-white`}
      >
        <Providers>
          <NavigationMenu/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
