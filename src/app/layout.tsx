import type { Metadata } from "next";
import Footer from "../components/Footer";
import ClientHeader from "../components/ClientHeader";
import "./globals.css";
import { courierPrimeFont, notoSans } from "@/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${courierPrimeFont.variable} ${notoSans.variable}`}>
        <ClientHeader />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
