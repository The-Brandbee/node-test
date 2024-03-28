import Contactus from "../contact/contact.js";

export const metadata = {
  title: "BOOK A DEMO",
  description: "",
  alternates: {
    canonical: "https://csp.global/contact",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
  },
};

export default function contactus() {
  return (
    <>
      <Contactus />
    </>
  );
}
