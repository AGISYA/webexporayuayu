import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

// Konfigurasi Font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Pilih berat font yang diperlukan
});

// Metadata Website
export const metadata: Metadata = {
  title: "Ayu Ayu Nusantara",
  description:
    "Ayu-Ayu menyajikan aneka makanan berat, kue pasar, dan minuman segar dengan cita rasa autentik dan berkualitas.",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
