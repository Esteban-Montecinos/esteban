import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavigationMenu from "../components/navigation-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Esteban Montecinos",
  description: "blog personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.className} bg-black text-zinc-100 bg-gradient-to-tl from-black/80 via-zinc-600/20 to-black/80 min-h-screen`}
      >
        <Providers>
          <NavigationMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}
