import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavbarComponent from "@/components/NavbarComponent/NavbarComponent";
import { getDictionary } from "./dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
   params: { lang } ,
}: Readonly<{
  children: React.ReactNode;
  params: string; // Add the 'params' property with the appropriate type
}>) {
  const dictionary = await getDictionary(lang);

  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
       <NavbarComponent dictionary={dictionary} lang />
        {children}
        </body>
    </html>
  );
}
