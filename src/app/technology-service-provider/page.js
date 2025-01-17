import Enablement from "../technology-service-provider/enablement.js";

export const metadata = {
  title: "Enablement",
  description: "",
  alternates: {
    canonical: "https://csp.global/contact",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
  },
};

export default function enablement() {
  return (
    <>
      <Enablement />
    </>
  );
}
