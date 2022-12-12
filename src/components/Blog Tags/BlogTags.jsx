import React from "react";
import { NavLink } from "react-router-dom";
import ExploreHeading from "../ExploreHeading";

const BlogTags = () => {
  const tagItems = [
    "Wedding 1",
    "Wedding 3",
    "Wedding 4",
    "Wedding 5",
    "Wedding 6",
    "Wedding 7",
    "Wedding 8",
    "Wedding 9",
    "Wedding 10",
    "Wedding 11",
    "Wedding 12",
    "Wedding 13",
    "Wedding 14",
    "Wedding 15",
    "Wedding 16",
    "Wedding 17",
    "Wedding 18",
    "Wedding 19",
    "Wedding 20",
    "Wedding 21",
    "Wedding 22",
    "Wedding 23",
    "Wedding 24",
    "Wedding 25",
    "Wedding 26",
    "Wedding 27",
    "Wedding 28",
  ];
  return (
    <div className="blog_tags lg:pb-16 lg:pt-6 pb-8 border-b">
      <div className="blog_tags_content container mx-auto lg:px-20 px-4">
        <div className="content_start">
          <ExploreHeading text="Related Tags" />

          <div className="all_tags flex gap-3 flex-wrap justify-center">
            {tagItems.map((tag, i) => {
              return (
                <p
                  key={i}
                  className="lg:text-lg text-sm text-textPrimary-900 cursor-pointer"
                >
                  <NavLink to="/tags">{tag} ,</NavLink>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTags;
