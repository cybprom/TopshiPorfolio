import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const neue = localFont({
  src: [
    {
      path: "../../public/Neue/NeueMachina-Regular.otf",
      weight: "400",
    },
    {
      path: "../../public/Neue/NeueMachina-light.otf",
      weight: "700",
    },
    {
      path: "../../public/Neue/NeueMachina-Ultrabold.otf",
      weight: "900",
    },
  ],
  variable: "--font-neu",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={neue.className}>{children}</body>
    </html>
  );
}
