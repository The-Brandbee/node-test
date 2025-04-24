import Modern from "../modern-soc/modern.js";

export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/modern-soc",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function modern() {
  return (
    <>
      <Modern />
    </>
  );
}
