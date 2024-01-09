import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    " Expert Cybersecurity Solutions for unparalleled Modern Security - CSP",
  description:
    "Explore CSP's cutting-edge cybersecurity solutions. Safeguard your business with advanced protection and proactive defence strategies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
