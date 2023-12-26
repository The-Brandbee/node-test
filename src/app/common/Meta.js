/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import Script from "next/script";

export default function Meta() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=GTM-PVLGJK24`}
      />
      <Script
        id="ga-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-PVLGJK24', { 
          page_path: window.location.pathname,
      });
      `,
        }}
      />
    </>
  );
}
