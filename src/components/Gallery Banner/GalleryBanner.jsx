import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const GalleryBanner = ({
  bannerPhoto,
  album1,
  album2,
  album3,
  album4,
  time,
  photographer,
  more,
}) => {
  const [filled, setFilled] = useState(false);
  return (
    <div className="gallery_banner w-full lg:h-[70vh] bg-replyBox-900">
      <div className="galleryBanner_content lg:flex h-max lg:h-full w-full border-b border-paginationBg-900">
        {/* Gallery Content Starts Here */}
        {/* Left */}

        <div className="gB_left w-full lg:w-9/12 h-full relative">
          <img
            src={bannerPhoto}
            alt="galleryBanner"
            className="w-full h-full"
          />
          <div className="lg:block hidden">
            <div className="socialLinks flex gap-8 absolute bottom-6 right-6">
              <div
                className="pinterest bg-white px-3 text-white py-1 font-semibold cursor-pointer"
                style={{ backgroundColor: "#E60023" }}
              >
                <a
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-pinterest mr-1"></i>
                  <span>Pin</span>
                </a>
              </div>
              <div
                className="love bg-white px-3 py-1 cursor-pointer"
                onClick={() => setFilled(!filled)}
              >
                <i
                  className={`${
                    filled ? "fa-solid text-red-600" : "fa-regular"
                  } fa-heart mr-1`}
                ></i>
                <span>{filled ? 1 : 0}</span>
              </div>
              <div className="share bg-white px-3 py-1 font-semibold cursor-pointer">
                <i className="fa-regular fa-share-from-square"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="gB_right w-full lg:w-3/12 h-full lg:bg-white bg-sectionBg-900">
          {/* Heading */}
          <div className="details pb-5 border-b border-paginationBg-900 px-4 pt-4">
            <div className="history text-dateColor-900 font-medium text-xs lg:text-sm">
              <i className="fa-regular fa-clock mr-2"></i>
              <span>Uploaded {time} months ago</span>
            </div>
            <div className="heading mt-5">
              <h3 className="text-textSecondary-900 font-semibold text-sm lg:text-base">
                Photo By {photographer} Weddings - Photographers
              </h3>
            </div>

            {/* Mobile Social */}
            <div className="block lg:hidden">
              <div className="socialLinks flex gap-8 mt-3">
                <div
                  className="pinterest bg-white px-1 lg:px-3 text-white py-1 font-semibold cursor-pointer shadow-sm"
                  style={{ backgroundColor: "#E60023" }}
                >
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-pinterest mr-1"></i>
                    <span>Pin</span>
                  </a>
                </div>
                <div
                  className="love bg-white px-3 py-1 cursor-pointer shadow-sm"
                  onClick={() => setFilled(!filled)}
                >
                  <i
                    className={`${
                      filled ? "fa-solid text-red-600" : "fa-regular"
                    } fa-heart mr-1`}
                  ></i>
                  <span>{filled ? 1 : 0}</span>
                </div>
                <div className="share bg-white px-3 py-1 font-semibold cursor-pointer shadow-sm">
                  <i className="fa-regular fa-share-from-square"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Album */}
          <div className="album pt-6 px-4 pb-8 border-b border-paginationBg-900">
            <div className="album_heading">
              <h3 className="text-textSecondary-900 font-semibold">
                View More photos from this Album
              </h3>
            </div>
            <div className="image_div flex gap-2 mt-4">
              <div className="image1 w-full h-24">
                <img src={album1} alt="" className="h-full w-full rounded-md" />
              </div>
              <div className="image2 w-full h-24">
                <img src={album2} alt="" className="h-full w-full rounded-md" />
              </div>
              <div className="image3 w-full h-24">
                <img src={album3} alt="" className="h-full w-full rounded-md" />
              </div>
              <div className="image4 w-full h-24 relative">
                <NavLink to="/album">
                  <img
                    src={album4}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                  <div
                    className="overlay absolute w-full h-full right-0 bottom-0 flex justify-center items-center cursor-pointer rounded-md"
                    style={{
                      background:
                        "radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
                    }}
                  >
                    <span className="text-white text-sm">+{more} More</span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryBanner;
