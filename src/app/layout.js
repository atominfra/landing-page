import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from 'next/script';
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

export const metadata = {
  title: "AtomInfra",
  description: "Making AI Accessible",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BNZY66YLX0"
        ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
