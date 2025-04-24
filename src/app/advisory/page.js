import Enablement from "../advisory/enablement.js";

export const metadata = {
  title: "Australia's Leading Technology Solution Provider | Strategic Advisory",
  description: "",
  alternates: {
    canonical: "https://csp.global/contact",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function enablement() {
  return (
    <>
      <Enablement />
    </>
  );
}
