import Cybersecurity from "../frameworks/Cybersecurity.js";

export const metadata = {
  title: "Csp: Cybersecurity Framework",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/blog",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function cybersecurityframework() {
  return (
    <>
      <Cybersecurity />
    </>
  );
}
