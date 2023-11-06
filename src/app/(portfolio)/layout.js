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
    <html lang="es">
      <body
        className={`${GeistSans.className} dark:bg-black bg-white min-h-screen dark:text-white text-black`}
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
