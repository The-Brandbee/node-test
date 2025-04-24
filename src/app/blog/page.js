import Blog from "../blog/blog.js";

export const metadata = {
  title: "Csp: Blog",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/blog",
  },
  openGraph: {
    images:
      "http://blog.csp.global/wp-content/uploads/2025/04/fav.jpg",
  },
};

export default function MdrMain() {
  return (
    <>
      <Blog />
    </>
  );
}
