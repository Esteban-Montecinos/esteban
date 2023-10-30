import "../../globals.css";
import { GeistSans } from 'geist/font'
import { Providers } from "@/app/providers";
export const metadata = {
  title: "Enlaces | Esteban Montecinos",
  description: "blog personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${GeistSans.className} bg-black min-h-screen`}
      >
      <Providers>
        { children }
      </Providers>
        </body>
    </html>
  );
}
