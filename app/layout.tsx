import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/themeSwitch";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kasia Rosińska | Portfolio",
  icons: {
    icon: '/favicon.png',
  },
  description:
    "Kasia Rosińska is a front-end developer with two years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-[#cab8ff] text-slate-950 relative pt-28 sm:pt-36
         dark:bg-zinc-900 dark:text-zinc-100`}
      >
        <div className="flex justify-center">
          <div className="max-w-[60rem] h-full relative justify-between -z-20 w-full">
            <div className="absolute h-[25rem] rounded-full blur-3xl -z-20 dark:bg-[#4268b6] w-[65%]"></div>
            <div className="right-0 absolute h-[20rem] rounded-full blur-3xl -z-20 dark:bg-[#993574] w-[35%]"></div>
          </div>
        </div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
