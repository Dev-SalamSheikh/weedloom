import React from "react";
import { NavLink } from "react-router-dom";

const UploadfromImage = () => {
  return (
    <div className="images flex gap-6 mt-4 ">
      <div className="singleImage flex items-center flex-col">
        <NavLink to="/uploadView">
          <img
            src="https://images.pexels.com/photos/3787395/pexels-photo-3787395.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </NavLink>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
      <div className="singleImage flex items-center flex-col">
        <NavLink to="/uploadView">
          <img
            src="https://images.pexels.com/photos/2058070/pexels-photo-2058070.jpeg?cs=srgb&dl=pexels-sadman-chowdhury-2058070.jpg&fm=jpg"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </NavLink>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
      <div className="singleImage flex items-center flex-col">
        <NavLink to="/uploadView">
          <img
            src="https://images.pexels.com/photos/1484990/pexels-photo-1484990.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </NavLink>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
      <div className="singleImage flex items-center flex-col">
        <NavLink to="/uploadView">
          <img
            src="https://images.pexels.com/photos/11279839/pexels-photo-11279839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </NavLink>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
      <div className="singleImage flex items-center flex-col">
        <NavLink to="/uploadView">
          <img
            src="https://images.pexels.com/photos/5747219/pexels-photo-5747219.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-24 w-24 cursor-pointer"
          />
        </NavLink>
        <div className="author__name mt-3 text-sm font-normal">
          <span>Ravi & Vidishha</span>
        </div>
      </div>
    </div>
  );
};

export default UploadfromImage;
