import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarTop from "./components/NavbarTop";
import Footer from "./components/Footer";
import CollapsibleMenu from "./components/CollapsibleMenu";
import Head from "next/head";
// import favicon from "@/app/favicon.ico";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivian Studios",
  description: "Shape Cinematic Dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden relative `}>
        {/* <Head>
          <Image src={favicon} alt="" />
        </Head> */}
        <NavbarTop />
        <CollapsibleMenu />
        {children}

        <Footer></Footer>
      </body>
      {/* <Script src="https://olivier3lanc.github.io/Scroll-Frames/js/scroll-frames.js"></Script> */}
    </html>
  );
}
