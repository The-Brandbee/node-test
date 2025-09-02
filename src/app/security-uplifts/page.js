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
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
}; 

export default function Security() {
  return (
    <>
      <SecurityMani />
    </>
  );
}
