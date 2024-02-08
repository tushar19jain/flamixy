import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["devanagari"], weight:["400"] });

export const metadata = {
  title: "Flamixy - The productivity app",
  description: "Flamixy is a productivity app that helps you work like a flamingo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
