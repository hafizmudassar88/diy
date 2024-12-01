import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DIY",
  description: "Best Car detailing Service in Town Town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${inter.className} h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <div className="w-full h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
