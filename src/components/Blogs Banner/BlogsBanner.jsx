import React from "react";

const BlogsBanner = ({ img1, article1, article2 }) => {
  return (
    <div className="hidden lg:block blogs_banner w-full h-[55vh] bg-red-50">
      <div
        className="banner_content w-full h-full flex bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${img1}')`,
        }}
      >
        <div className="left w-6/12 h-full bg-center bg-cover bg-no-repeat lg:px-12 lg:py-8 flex justify-center items-center">
          <div
            className="article px-4 py-2"
            style={{
              background:
                "radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
            }}
          >
            <h1 className="text-white text-2xl font-regular leading-10">
              {article1}
            </h1>
          </div>
        </div>
        <div className="right w-6/12 h-full bg-center bg-cover bg-no-repeat lg:px-12 lg:py-8 flex justify-center items-center">
          <div
            className="article px-4 py-2"
            style={{
              background:
                "radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
            }}
          >
            <h1 className="text-white text-2xl font-regular leading-10">
              {article2}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsBanner;
