import { NavLink } from "react-router-dom";

const UserRightCard = ({ bg, link, text, margin }) => {
  return (
    <div
      className={`w-full h-32 rounded-md ${margin && "mb-2"}`}
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text */}
      <NavLink to={`/${link}`}>
        <div className="w-full h-full bg-black bg-opacity-60 text-white cursor-pointer flex justify-center items-center">
          <h1 className="text-base md:text-lg font-medium capitalize">
            {text}
          </h1>
        </div>
      </NavLink>
    </div>
  );
};

export default UserRightCard;
