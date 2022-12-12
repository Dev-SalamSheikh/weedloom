import React, { useState } from "react";
import ReplyCard from "./ReplyCard";

const ReviewCard = ({ image, name }) => {
  const [viewLess, setViewLess] = useState(false);
  return (
    <>
      <div className="w-full py-6 px-5">
        <div className="review__card__content">
          <div className="review_card_heading flex justify-between items-center">
            <div className="heading_left flex gap-4 w-full justify-between lg:justify-start lg:w-max">
              <div className="name_image flex items-center gap-4">
                <img
                  src={image}
                  alt="bride_image"
                  className="w-14 h-14 rounded-full"
                />
                <div className="name">
                  <h5 className="text-textBlack-900 font-bold mb-1">{name}</h5>
                  <p className="text-textSecondary-900 text-sm">4 months ago</p>
                </div>
              </div>

              <div className="overall__rating flex items-center justify-center">
                <span className="bg-textPrimary-900 p-1 text-white font-semibold">
                  <i className="fa-solid fa-star mr-2"></i>
                  5.0
                </span>
              </div>
            </div>
            <div className="heading_right lg:block hidden">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.facebook.com">
                    <i
                      className="fa-brands fa-square-facebook"
                      style={{ color: "#4267B2" }}
                    ></i>
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.twitter.com">
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#1DA1F2" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="review_content mt-4">
            <div className="initial_view h-14 overflow-hidden pr-5 text-textSecondary-900 leading-7 font-normal text-sm">
              <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur illum aliquid voluptate autem, ipsum reprehenderit
                nam, ab labore, delectus ipsa sunt excepturi doloribus eius
                repellendus quia. Possimus quibusdam consequatur perspiciatis,
                rem officiis modi reiciendis mollitia reprehenderit consequuntur
                assumenda in rerum molestias doloremque eos quae tempore
                delectus suscipit architecto? Repellat, corporis?
              </span>
            </div>

            {viewLess && (
              <div className="hidden_view text-textSecondary-900 leading-7 font-normal text-sm pr-5">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum in tempora adipisci accusamus quisquam quam
                  perspiciatis tempore consequatur ipsum ipsa quis eligendi,
                  neque fugit fuga officiis, sint consequuntur quos similique
                  vitae dolorem debitis. Omnis corrupti doloribus molestias
                  nostrum tenetur, sit id doloremque est recusandae reiciendis
                  minus voluptatum accusantium et? Debitis, et optio? Dolorum
                  dolores autem quam atque quisquam quibusdam deserunt!
                </span>
              </div>
            )}
            <span
              className="text-sm font-bold text-textSecondary-900 cursor-pointer"
              onClick={() => setViewLess(!viewLess)}
            >
              {viewLess ? "Read Less.." : "..Read More"}
            </span>
            <div className="block lg:hidden mt-4">
              <div className="social_links flex items-center gap-4">
                <div className="facebook w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.facebook.com">
                    <i
                      className="fa-brands fa-square-facebook"
                      style={{ color: "#4267B2" }}
                    ></i>
                  </a>
                </div>
                <div className="twitter w-8 h-8 border flex items-center justify-center p-1">
                  <a href="https://www.twitter.com">
                    <i
                      className="fa-brands fa-twitter"
                      style={{ color: "#1DA1F2" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReplyCard />
    </>
  );
};

export default ReviewCard;
