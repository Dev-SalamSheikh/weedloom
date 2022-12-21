import { NavLink, Outlet } from "react-router-dom";
import UserRightCard from "./UserRightCard";

const UserProfileContent = () => {
  let activeStyle = {
    color: "#00aef7",
  };

  let defaultStyle = {
    color: "#4A4A4A",
  };

  return (
    <div className="bg-[#efefef]">
      {/* Content Container Start */}
      <div className="blogList_container_content container mx-auto lg:px-20 px-2 lg:py-14 py-4">
        <div className="w-full h-full flex justify-between flex-col lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-[15%]">
            {/* Toggle Card */}
            <div className="px-5 lg:py-6 py-2 flex flex-col gap-5 bg-white shadow-sm w-full rounded-sm">
              {/* Love */}
              <NavLink
                to="/user/profile"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                end
              >
                <div
                  className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}
                >
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Loves
                  </span>
                </div>
              </NavLink>

              {/* Setup Your wedding */}
              <NavLink
                to="/setup-wedding"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                end
              >
                <div
                  className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}
                >
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Setup Your Wedding
                  </span>
                </div>
              </NavLink>

              {/* Checklist */}
              <NavLink
                to="/user/profile/checklists"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                end
              >
                <div
                  className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}
                >
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Checklists
                  </span>
                </div>
              </NavLink>

              {/* Shortlist */}
              <NavLink
                to="/user/profile/shortlists"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                end
              >
                <div
                  className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}
                >
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Shortlists
                  </span>
                </div>
              </NavLink>

              {/* Finalize Vendor */}
              <NavLink
                to="/user/profile/finalize-vendor"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                end
              >
                <div
                  className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}
                >
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Finalize Vendors
                  </span>
                </div>
              </NavLink>

              {/* Settings */}
              <NavLink
                to="/user/profile/settings"
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
                end
              >
                <div
                  className={`flex items-center gap-3 cursor-pointer hover:text-[#00aef7] duration-100`}
                >
                  <span className="text-xs md:text-sm font-medium ml-1">
                    Settings
                  </span>
                </div>
              </NavLink>
            </div>

            {/* Weddloom Contact */}
            <div className="bg-white shadow-sm w-full rounded-sm mt-4 px-5 py-3 flex justify-center flex-col items-center gap-1 border-b border-b-paginationBg-900 lg:border-none mb-4 lg:mb-0">
              <h1 className="text-textPrimary-900 font-semibold">
                WeddLoom Support
              </h1>

              <div className="flex items-center gap-2 text-textSecondary-900 cursor-pointer hover:text-[#00aef7] duration-100">
                <i className="fa-solid fa-phone lg:text-xl"></i>
                <span className="text-sm lg:text-base font-semibold">
                  0129874-564
                </span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white shadow-sm w-full lg:w-[60%] rounded-sm overflow-hidden h-max">
            <Outlet />
          </div>

          {/* Right Side */}
          <div className="bg-white shadow-sm w-full lg:w-[20%] rounded-sm overflow-hidden h-[60vh] overflow-y-scroll">
            <UserRightCard
              bg="https://cdn0.weddingwire.in/article/9086/3_2/960/jpg/16809-creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpeg"
              text="Vendor"
              link="photographer"
              margin={true}
            />
            <UserRightCard
              bg="https://images.squarespace-cdn.com/content/v1/578537f5cd0f68f8a7411561/1563066377271-DST1DID3B4RHI35Q9X97/Phoenix+Wedding+Photographer"
              text="Photographer"
              link="photographer"
              margin={true}
            />
            <UserRightCard
              bg="https://www.sandeepshokeen.com/blog/wp-content/uploads/2019/11/1T1A7165-1200x800.jpg"
              text="Makeup"
              link="photographer"
              margin={true}
            />
            <UserRightCard
              bg="https://www.universestudio.in/wp-content/uploads/2022/07/Best-Wedding-Photographers-in-Varanasi-India-Universe-Studio-16.jpg"
              text="Bridal Wear"
              margin={true}
            />
            <UserRightCard
              bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-Zd0pU1fWoQirOfbuOnOKS0meXUxE9Bwbw&usqp=CAU"
              text="Groom Wear"
              margin={true}
            />
            <UserRightCard
              bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LiBwmhJ9mjPxDSYPo-sJzkD5gKNMlCUqm7mIcM_rf4Zi9YIl_jo-OtzNQggVLpghDic&usqp=CAU"
              text="Photography"
              margin={true}
            />
            <UserRightCard
              bg="https://wishnwed-blog-media.s3.ap-southeast-1.amazonaws.com/wordpress/uploads/2020/09/167419287_1095648420909697_597662823693753092_n-1024x697.jpg"
              text="Dressups"
            />
          </div>
        </div>
      </div>
      {/* Content Container End */}
    </div>
  );
};

export default UserProfileContent;
