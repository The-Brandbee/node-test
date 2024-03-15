import Cybersecurity from "../cybersecurityframework/Cybersecurity.js";

export const metadata = {
  title: "Csp: Cybersecurity Framework",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/blog",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
  },
};

export default function cybersecurityframework() {
  return (
    <>
      <Cybersecurity />
    </>
  );
}
