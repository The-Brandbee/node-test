import Lighthouseplatform from "../lighthouse-platform/lighthouse-platform.js";

export const metadata = {
  title: "Lighthouse Platform",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/mdr",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
  },
};

export default function lighthouseplatform() {
  return (
    <>
      <Lighthouseplatform />
    </>
  );
}
