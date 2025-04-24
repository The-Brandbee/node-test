import Lighthouseplatform from "../lighthouse-platform/lighthouse-platform.js";

export const metadata = {
  title: "Lighthouse Platform",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/mdr",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function lighthouseplatform() {
  return (
    <>
      <Lighthouseplatform />
    </>
  );
}
