import React from "react";
import BlogBody from "../../components/Blog Body/BlogBody";
import BlogHeader from "../../components/Blog header/BlogHeader";
import CommentBox from "../../components/Comment Box/CommentBox";
import LatestBlogs from "../../components/Latest Blogs/LatestBlogs";
import Navbar from "../../components/navbar/Navbar";
import TopNav from "../../components/top nav/TopNav";
import Footer from "../../components/Footer/Footer";
import Copyright from "../../components/Footer/copyright/Copyright";
import BlogTags from "../../components/Blog Tags/BlogTags";
import BlogExplore from "../../components/Blog Explore/BlogExplore";
import Instagram from "../../components/Instagram/Instagram";

const Blog = () => {
  return (
    <div className="blog overflow-x-hidden h-full">
      <TopNav />
      <Navbar />
      <BlogHeader />
      <BlogBody />
      <BlogTags />
      <BlogExplore />
      <CommentBox />
      <div className="mt-10 lg:block hidden">
        <Instagram />
      </div>
      <div className="border-b">
        <LatestBlogs heading="More Blogs" />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Blog;
