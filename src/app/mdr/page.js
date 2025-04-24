import Mdr from "../mdr/mdr.js";

export const metadata = {
  title: "",
  description: "Australia's Leading Managed Detection and Response Provider ",
  alternates: {
    canonical: "https://csp.global/mdr",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function MdrMain() {
  return (
    <>
      <Mdr />
    </>
  );
}
