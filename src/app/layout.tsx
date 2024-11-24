import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Games - Encontre os Melhores Jogos para Jogar",
  description:
    "Descubra uma seleção dos melhores jogos de diversos gêneros, ideais para todos os tipos de jogadores.",
  keywords: [
    "games",
    "jogos",
    "diversão",
    "entretenimento",
    "jogos online",
    "melhores jogos",
    "games para todos",
    "jogos para consoles",
    "novos jogos",
  ],
  openGraph:{
    images:[`${process.env.PROJECT_URL}/preview.png`]
  },
  robots:{
    index:true,
    follow:true,
    nocache:true,
    googleBot:{
      index:true,
      follow:true,
      noimageindex:true,
    }
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      <body className="bg-neutral-900 text-gray-100">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
