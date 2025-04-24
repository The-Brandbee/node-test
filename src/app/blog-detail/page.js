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
//       "",
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
        title: blog.heading,
        description: blog.description,
      },
      alternates: {
        canonical: "https://csp.global/blog-detail?blogid=" + blogId,
      },
    };
  } catch (error) {
    console.log("Erorr", error);
    return {
      title: "CSP: Blog",
    };
  }
}
