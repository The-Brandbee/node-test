import Blog from "../blog/blog.js";

export const metadata = {
  /*title: "",
  description: "",*/
  alternates: {
    canonical: "https://csp.global/blog",
  },
};

export default function MdrMain() {
  return (
    <>
      <Blog />
    </>
  );
}
