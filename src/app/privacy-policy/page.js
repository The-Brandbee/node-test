import PrivacyPolicy from "../privacy-policy/PrivacyPolicy.js";

export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/about",
  },
  openGraph: {
    images:
      "",
  },
};

export default function Aboutus() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
