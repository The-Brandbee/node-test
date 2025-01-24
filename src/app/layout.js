import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    "CSP Global | Australia's Leading Technology Solution Provider | IT Managed Services",
  description:
    "Explore CSP's cutting-edge cybersecurity solutions. Safeguard your business with advanced protection and proactive defence strategies.",

  alternates: {
    canonical: "https://csp.global",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="GTM-PVLGJK24" />
    </html>
  );
}
