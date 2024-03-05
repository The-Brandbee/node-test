import Blog from "../blog-detail/InnerBlog.js";

export default function InnerBlog() {
  return (
    <>
      <Blog />
    </>
  );
}
export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/blog",
  },
  openGraph: {
    images:
      "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
  },
};
