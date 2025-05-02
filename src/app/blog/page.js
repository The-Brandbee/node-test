import Blog from "../blog/blog.js";

export const metadata = {
  title: "Csp: Blog",
  /*description: "",*/
  alternates: {
    canonical: "https://csp.global/blog",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
  },
};

export default function MdrMain() {
  return (
    <>
      <Blog />
    </>
  );
}
