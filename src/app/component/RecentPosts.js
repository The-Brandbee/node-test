import React, { useState, useEffect } from "react";
import axios from "axios";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://cms.csplighthouse.com/api/blogs/");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-rect-post">
      {posts.map((post) => (
        <ul key={post.id}>
          <li> {post.date}</li>
          <li>
            <a href={`/blog-detail?blogid=${post._id}`}>{post.heading}</a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RecentPosts;
