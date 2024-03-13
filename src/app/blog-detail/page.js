import Blog from "../blog-detail/InnerBlog.js";

export default function InnerBlog() {
  return (
    <>
      <Blog />
    </>
  );
}
// export const metadata = {
//   title: "Blog Detail",
//   description: "",
//   alternates: {
//     canonical: "https://csp.global/blog",
//   },
//   openGraph: {
//     images:
//       "https://cms.csplighthouse.com/public/uploads/blogs/blogs31a094f7cd7a260a28be8d150e4a99fc.png",
//   },
// };
export async function generateMetadata({ params, searchParams }) {
  try {
    const params = searchParams;
    const blogId = params.blogid;

    const blogResponse = await fetch(
      "https://cms.csplighthouse.com/api/blogs/" + blogId
    );

    const blog = await blogResponse.json();

    return {
      title: blog.heading,
      description: blog.description,
      openGraph: {
        images: "https://cms.csplighthouse.com/" + blog.image,
      },
    };
  } catch (error) {
    console.log("Erorr", error);
    return {
      title: "CSP: Blog",
    };
  }
}
