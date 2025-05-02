import Cybersecurity from "../cybersecurityframework/Cybersecurity.js";

export const metadata = {
  title: "Csp: Cybersecurity Framework",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/blog",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
};

export default function cybersecurityframework() {
  return (
    <>
      <Cybersecurity />
    </>
  );
}
