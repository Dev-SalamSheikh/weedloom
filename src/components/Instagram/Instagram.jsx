import React from "react";

const Instagram = () => {
  return (
    <div className="hidden lg:block">
      <div
        className="instagram py-16 flex justify-center text-center text-white"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url('./bg-instagram.webp')`,
        }}
      >
        <div className="instagram_content">
          <h1 className="text-3xl font-bold">More Inspiration on Instagram</h1>
          <p className="text-3xl font-bold my-4">@siteName</p>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <button className="py-4 px-8 rounded-full bg-textPrimary-900 text-white">
              Follow
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
