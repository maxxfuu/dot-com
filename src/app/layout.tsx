import type { Metadata } from "next";
import { IBM_Plex_Mono} from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Max Fu",
  description: "Max Fu's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} antialiased relative`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#232438)]"></div>
        <div className="flex flex-col min-h-screen w-full sm:max-w-4xl sm:mx-auto md:px-12 select-none">
          <Navbar/>
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
        </div>
      </body> 
    </html>
  );
}
