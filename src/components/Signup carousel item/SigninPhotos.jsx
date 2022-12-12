import React from "react";

const SigninPhotos = ({ image }) => {
  return (
    <div className="w-full">
      <div
        className="bg-white w-full"
        style={{
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
      >
        <img
          src={image}
          alt="banner"
          className="h-[760px]"
          style={{
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default SigninPhotos;
