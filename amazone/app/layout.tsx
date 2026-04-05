"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./component/header";
import Footer from "./component/footer";
import "./globals.css";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "amazone clone",
// };


export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();
  const noLayoutPages = ["/login"];

  const hideLayout = noLayoutPages.includes(router);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <SessionProvider>
        <>   
          {!hideLayout && <Header />}
          <main>{children}</main>
          {!hideLayout && <Footer />}
        </>
      </SessionProvider> 
       
      
      
      </body>
    </html>
  );
}
