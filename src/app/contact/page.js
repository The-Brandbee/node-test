import Contactus from "../contact/contact.js";

export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/contact",
  },
};

export default function contactus() {
  return (
    <>
      <Contactus />
    </>
  );
}
