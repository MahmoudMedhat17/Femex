import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import Navbar from "@/app/common/Navbar";
import Footer from "@/app/common/Footer";
// import ScrollToTop from "@/utils/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Femex",
  icons: {
    icon: "/assets/logo.png"
  }
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {

  let messages;

  try {
    messages = await getMessages({ locale: params.locale });
  } catch (error) {
    return notFound();
  }


  return (
    <html lang={params.locale} dir={params.locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* <ScrollToTop /> */}
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
