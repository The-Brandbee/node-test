import SecurityMani from "../security-uplifts/security-uplifts.js";

export const metadata = {
  title: "Security Uplifts",
  description:
    "CSP's cutting-edge technology solutions will safeguard your business and help you modernize with our strategic vision.",
  alternates: {
    canonical: "https://csp.global/mdr",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function Security() {
  return (
    <>
      <SecurityMani />
    </>
  );
}
