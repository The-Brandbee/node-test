import Lighthouseplatform from "../lighthouse-platform/lighthouse-platform.js";

export const metadata = {
  title: "Lighthouse Platform",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/mdr",
  },
  openGraph: {
    images:
      "",
  },
};

export default function lighthouseplatform() {
  return (
    <>
      <Lighthouseplatform />
    </>
  );
}
