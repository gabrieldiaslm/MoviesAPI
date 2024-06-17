import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import Header from './components/Header'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Filmes B4",
  description: "PROG3-AVAL2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
