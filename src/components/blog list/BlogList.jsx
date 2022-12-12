import React from "react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div className="blogList__container">
      <div className="blogList_container_content container mx-auto lg:px-20 px-2">
        <div className="blog_cards">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
