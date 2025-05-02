import Enablement from "../advisory/enablement.js";

export const metadata = {
  title: "Australia's Leading Technology Solution Provider | Strategic Advisory",
  description: "",
  alternates: {
    canonical: "https://csp.global/contact",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
};

export default function enablement() {
  return (
    <>
      <Enablement />
    </>
  );
}
