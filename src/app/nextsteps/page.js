import Nextsteps from "./nextsteps.js";

export const metadata = {
  title: "Nextsteps CSP",
  description:
    "Explore CSP's cutting-edge cybersecurity solutions. Safeguard your business with advanced protection and proactive defence strategies.",
  alternates: {
    canonical: "https://csp.global//ai-readiness",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2024/11/eas.jpeg",
  },
};

export default function Security() { 
  return (
    <>
      <Nextsteps />
    </>
  );
}
