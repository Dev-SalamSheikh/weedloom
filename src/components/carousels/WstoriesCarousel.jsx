import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const WstoriesCarousel = ({ img, name, summary, date }) => {
  const [showShare, setShowShare] = useState(false);

  const pageLink = document.location.href;

  return (
    <div className="bg-white shadow-md group">
      <div className="wStoriesCarousel__content w-full">
        <div className="wrapper w-full rounded-md">
          <NavLink to="/blog">
            <div className="wStoriesCarousel__img w-full overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-full h-56 group-hover:scale-125 duration-200 rounded-lg"
              />
            </div>
          </NavLink>
          <div className="wStoriesCarousel_content py-4 px-6 text-textSecondary-900 cursor-pointer">
            {/* Name */}
            <NavLink to="/blog">
              <div className="name h-6 overflow-hidden">
                <p className="text-base font-bold">
                  <a href="*">{name}</a>
                </p>
              </div>

              {/* Summary Box */}
              <div className="summary mt-2 mb-4 h-10 overflow-hidden">
                <p className="text-sm font-semibold">{summary}</p>
              </div>
            </NavLink>

            {/* Date Box */}
            <div className="date flex justify-between items-center overflow-hidden">
              <div className="date_box">
                <span className="text-sm font-normal text-dateColor-900">
                  {date}
                </span>
              </div>
              <div className="share flex items-center text-xl gap-4 text-textPrimary-900">
                <div
                  className={`share_icons flex gap-4 duration-300 ${
                    showShare ? "translate-x-0" : "translate-x-48"
                  }`}
                >
                  <a
                    href={`https://www.facebook.com/share.php?u=${pageLink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-square-facebook"
                      style={{ color: "#4267B2" }}
                    ></i>
                  </a>
                  <a
                    href={`https://twitter.com/share?url=${pageLink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-square-twitter"
                      style={{ color: "#1DA1F2" }}
                    ></i>
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?text=${pageLink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-whatsapp"
                      style={{ color: "#25d366" }}
                    ></i>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-linkedin"
                      style={{ color: "#0077b5" }}
                    ></i>
                  </a>
                </div>

                <span onClick={() => setShowShare(!showShare)}>
                  <i className="fa-solid fa-share-nodes"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WstoriesCarousel;
