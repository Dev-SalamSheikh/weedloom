import React from "react";

const SignupPhotos = ({ image }) => {
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
          className="h-[1050px]"
          style={{
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default SignupPhotos;
