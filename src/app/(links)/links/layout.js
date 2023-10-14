import "../../globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/app/providers";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Enlaces | Esteban Montecinos",
  description: "blog personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.className} bg-black bg-gradient-to-tl px-4 from-black/80 via-zinc-600/20 to-black/80 min-h-screen`}
      >
      <Providers>
      
        { children }
      </Providers>
        </body>
    </html>
  );
}
