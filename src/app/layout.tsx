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
      <Head>
        <link
          rel="preload"
          href="/fonts/Montserrat-Thin.ttf"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <body className={`${inter.className} overflow-x-hidden relative`}>
        {/* <Head>
          <Image src={favicon} alt="" />
        </Head> */}
        <Head>
          <title>Vivian Studios</title>
          <meta
            name="description"
            content="Vivian Studios is a TPN-certified post-production agency delivering expert VFX, animation, image retouching, and video content for brands around the world."
            key="desc"
          />
        </Head>
        <NavbarTop />
        <CollapsibleMenu />
        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
