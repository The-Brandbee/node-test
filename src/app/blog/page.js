import Blog from "../blog/blog.js";

export const metadata = {
  title: "Csp: Blog",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/blog",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/th.jpeg",
  },
};

export default function MdrMain() {
  return (
    <>
      <Blog />
    </>
  );
}
