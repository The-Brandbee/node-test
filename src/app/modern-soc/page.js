import Modern from "../modern-soc/modern.js";

export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/modern-soc",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
};

export default function modern() {
  return (
    <>
      <Modern />
    </>
  );
}
