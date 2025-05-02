import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    "CSP Global | Australia's Leading Technology Solution Provider | IT Managed Services",
  description:
    "CSP's cutting-edge technology solutions will safeguard your business and help you modernize with our strategic vision.",

  alternates: {
    canonical: "https://csp.global",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg", 
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
