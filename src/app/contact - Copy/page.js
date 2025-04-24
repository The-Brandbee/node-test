import Contactus from "../contact/contact.js";

export const metadata = {
  title: "BOOK A DEMO",
  description: "",
  alternates: {
    canonical: "https://csp.global/contact",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function contactus() {
  return (
    <>
      <Contactus />
    </>
  );
}
