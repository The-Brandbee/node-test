import Mdr from "../mdr/mdr.js";

export const metadata = {
  title: "",
  description: "Australia's Leading Managed Detection and Response Provider ",
  alternates: {
    canonical: "https://csp.global/mdr",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
};

export default function MdrMain() {
  return (
    <>
      <Mdr />
    </>
  );
}
