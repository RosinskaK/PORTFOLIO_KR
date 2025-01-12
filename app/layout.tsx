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
  description:
    "Kasia Rosińska is a front-end developer with one and a half years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 text-slate-950 relative pt-28 sm:pt-36
         dark:bg-zinc-900 dark:text-zinc-100`}
      >
        <div className="sm:bg-[#fbe2e3] absolute top-[-6rem] right-[1rem] h-[25rem] w-[31.25rem] rounded-full blur-[9rem] sm:w-[68.75rem] -z-10 dark:bg-[#993574]"></div>
        <div className="bg-[#b373db] sm:bg-[#a6acef] absolute top-[-1rem] left-[-35rem] h-[32.25rem] w-[50rem] rounded-full blur-[9rem] sm:w-[64rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10 dark:bg-[#4268b6]"></div>
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
