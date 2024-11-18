import SecurityMani from "../ai-readiness/ai-readiness.js";

export const metadata = {
  title: "AI READINESS CSP",
  description:
    "Explore CSP's cutting-edge cybersecurity solutions. Safeguard your business with advanced protection and proactive defence strategies.",
  alternates: {
    canonical: "https://csp.global//ai-readiness",
  },
  openGraph: {
    images:
      "https://csp.global/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNew-Project.5ba5b460.png&w=750&q=75",
  },
};

export default function Security() {
  return (
    <>
      <SecurityMani />
    </>
  );
}
