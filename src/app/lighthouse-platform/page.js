import Lighthouseplatform from "../lighthouse-platform/lighthouse-platform.js";

export const metadata = {
  title: "Lighthouse Platform",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/mdr",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
};

export default function lighthouseplatform() {
  return (
    <>
      <Lighthouseplatform />
    </>
  );
}
