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
      <bodybg-gradient-to-tl
        className={`${inter.className} bg-black min-h-screen`}
      >
      <Providers>
      
        { children }
      </Providers>
        </bodybg-gradient-to-tl>
    </html>
  );
}
