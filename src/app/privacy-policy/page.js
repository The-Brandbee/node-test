import PrivacyPolicy from "../privacy-policy/PrivacyPolicy.js";

export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/about",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function Aboutus() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
