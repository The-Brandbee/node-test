import PrivacyPolicy from "../privacy-policy/PrivacyPolicy.js";

export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/about",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
};

export default function Aboutus() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
