import "./globals.css";
import { Archivo, Figtree } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-texto",
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-titulos",
  weight: ["700", "800"],
});

export const metadata = {
  title: "Roller — Colchones y sommiers directo de fábrica",
  description: "Colchones, sommiers, almohadas y accesorios premium con envío gratis a todo el país. 12 cuotas sin interés.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${figtree.variable} ${archivo.variable}`}>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
