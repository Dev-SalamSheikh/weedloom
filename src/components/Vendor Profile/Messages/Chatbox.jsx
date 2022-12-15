import React from "react";
import CustomarMessage from "./CustomarMessage";
import VendorMessage from "./VendorMessage";

const Chatbox = () => {
  return (
    <div className="max-h-[75vh] w-full">
      {/* Header */}
      <div className="w-full h-[60px] border-b border-b-paginationBg-900 px-4 flex justify-between items-center">
        {/* Left */}
        <div className="w-full">
          {/* Name */}
          <h2 className="text-textSecondary-900 lg:text-base text-sm font-bold mb-[4px]">
            Junaid Asghar
          </h2>
          <p
            title="Location"
            className="text-textPrimary-900 text-xs font-semibold"
          >
            <i className="fa-solid fa-location-dot mr-1"></i> Islamabad
          </p>
        </div>
        {/* Right */}
        <div className="w-full flex justify-end">
          <div className="text-textSecondary-900 flex gap-4">
            <i
              class="fa-regular fa-star cursor-pointer hover:text-textPrimary-900 duration-200"
              title="Mark the Conversation as Star"
            ></i>
            <i
              class="fa-solid fa-trash cursor-pointer hover:text-textPrimary-900 duration-200"
              title="Delete"
            ></i>
            <i
              class="fa-regular fa-envelope-open cursor-pointer hover:text-textPrimary-900 duration-200"
              title="Mark as unread"
            ></i>
          </div>
        </div>
      </div>

      {/* Message Box */}
      <div
        className="w-full flex justify-end flex-col"
        style={{
          height: "calc(75vh - 60px)",
        }}
      >
        {/* Messages */}
        <div className="overflow-y-scroll flex flex-col-reverse px-4 py-2 border-b border-b-paginationBg-900 h-full">
          <div>
            <VendorMessage text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, temporibus mollitia! Vero suscipit commodi recusandae quidem blanditiis nam quae magnam dolore libero, ex error fugiat dolores rerum explicabo maxime exercitationem ab, dolorum quod nesciunt? Quod consequuntur mollitia, voluptatibus explicabo neque iure, officiis placeat, assumenda adipisci esse voluptatem facere quam illum inventore. Voluptate nobis, a aspernatur consectetur facilis veniam deserunt inventore sed? Hic nihil fugiat aperiam deserunt sequi error atque. Aliquid natus, cupiditate omnis, maxime libero eligendi id, debitis magni autem excepturi veritatis fugit nam blanditiis fuga ipsam? Aut, maiores consequatur doloribus minus, deserunt ullam reiciendis cumque cum magnam voluptatem deleniti." />
            <VendorMessage text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, temporibus mollitia! Vero suscipit commodi recusandae quidem blanditiis nam quae magnam dolore libero, ex error fugiat dolores rerum explicabo maxime exercitationem ab, dolorum quod nesciunt? Quod consequuntur mollitia, voluptatibus explicabo neque iure, officiis placeat, assumenda adipisci esse voluptatem facere quam illum inventore. Voluptate nobis, a aspernatur consectetur facilis veniam deserunt inventore sed? Hic nihil fugiat aperiam deserunt sequi error atque. Aliquid natus, cupiditate omnis, maxime libero eligendi id, debitis magni autem excepturi veritatis fugit nam blanditiis fuga ipsam? Aut, maiores consequatur doloribus minus, deserunt ullam reiciendis cumque cum magnam voluptatem deleniti." />
            <VendorMessage text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, temporibus mollitia! Vero suscipit commodi recusandae quidem blanditiis nam quae magnam dolore libero, ex error fugiat dolores rerum explicabo maxime exercitationem ab, dolorum quod nesciunt? Quod consequuntur mollitia, voluptatibus explicabo neque iure, officiis placeat, assumenda adipisci esse voluptatem facere quam illum inventore. Voluptate nobis, a aspernatur consectetur facilis veniam deserunt inventore sed? Hic nihil fugiat aperiam deserunt sequi error atque. Aliquid natus, cupiditate omnis, maxime libero eligendi id, debitis magni autem excepturi veritatis fugit nam blanditiis fuga ipsam? Aut, maiores consequatur doloribus minus, deserunt ullam reiciendis cumque cum magnam voluptatem deleniti." />
            <VendorMessage text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, temporibus mollitia! Vero suscipit commodi recusandae quidem blanditiis nam quae magnam dolore libero, ex error fugiat dolores rerum explicabo maxime exercitationem ab, dolorum quod nesciunt? Quod consequuntur mollitia, voluptatibus explicabo neque iure, officiis placeat, assumenda adipisci esse voluptatem facere quam illum inventore. Voluptate nobis, a aspernatur consectetur facilis veniam deserunt inventore sed? Hic nihil fugiat aperiam deserunt sequi error atque. Aliquid natus, cupiditate omnis, maxime libero eligendi id, debitis magni autem excepturi veritatis fugit nam blanditiis fuga ipsam? Aut, maiores consequatur doloribus minus, deserunt ullam reiciendis cumque cum magnam voluptatem deleniti." />
            <CustomarMessage
              img="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Hi, are you available to talk?"
            />
            <VendorMessage text="Yes sir, How can i assist you? I would love to help you!" />
            <CustomarMessage
              img="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600"
              text="Well, I have to reserve a custom wedding package. Can you handle all of my requirements?"
            />
          </div>
        </div>

        {/* SendBox */}
        <div className="bg-white h-[74px] lg:px-4 px-1 flex justify-between items-center">
          {/* Upper Part */}
          <div className="w-full border border-paginationBg-900 flex gap-4 items-center justify-between px-2 rounded-l">
            <div className="w-full">
              <input
                type="text"
                placeholder="Write Message..."
                className="w-full text-textSecondary-900 outline-none text-xs lg:text-sm py-3 focus:border-textPrimary-900 rounded-sm"
                maxLength={100}
              />
            </div>
            <div>
              <label
                htmlFor="file"
                className="text-[10px] lg:text-xs border-l border-l-paginationBg-900 text-textSecondary-900 flex items-center gap-1 pl-1"
              >
                <i className="fa-solid fa-paperclip cursor-pointer text-[10px] lg:text-sm"></i>{" "}
                Attachments
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
          </div>

          {/* button */}
          <div className="w-max">
            <button
              className="text-white text-xs lg:text-sm font-semibold bg-textPrimary-900 px-4 flex items-center gap-1 py-[13px] rounded-tr rounded-br"
              type="submit"
            >
              Send <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
