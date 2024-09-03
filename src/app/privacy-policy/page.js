import PrivacyPolicy from "../privacy-policy/PrivacyPolicy.js";

export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/about",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
  },
};

export default function Aboutus() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
