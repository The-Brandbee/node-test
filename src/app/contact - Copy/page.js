import Contactus from "../contact/contact.js";

export const metadata = {
  title: "BOOK A DEMO",
  description: "",
  alternates: {
    canonical: "https://csp.global/contact",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
};

export default function contactus() {
  return (
    <>
      <Contactus />
    </>
  );
}
