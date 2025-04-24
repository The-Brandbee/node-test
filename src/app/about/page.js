import About from "../about/about.js";

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
      <About />
    </>
  );
}
