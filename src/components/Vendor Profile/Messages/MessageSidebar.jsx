import React from "react";
import { NavLink } from "react-router-dom";
import MessageSender from "./MessageSender";

const MessageSidebar = () => {
  const senderData = [
    {
      id: 1,
      name: "Junaid Asghar",
      text: "Hey, I Need a info",
      img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Dec 9",
    },
    {
      id: 2,
      name: "Salam Sheikh",
      text: "Are you there?",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Dec 2",
    },
    {
      id: 3,
      name: "Sohan",
      text: "I want to book a vendor",
      img: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Nov 20",
    },
    {
      id: 4,
      name: "Hossain Faiyaz",
      text: "Okay! Thats Great",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Nov 26",
    },
    {
      id: 1,
      name: "Junaid Asghar",
      text: "Hey, I Need a info",
      img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Dec 9",
    },
    {
      id: 2,
      name: "Salam Sheikh",
      text: "Are you there?",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Dec 2",
    },
    {
      id: 3,
      name: "Sohan",
      text: "I want to book a vendor",
      img: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Nov 20",
    },
    {
      id: 4,
      name: "Hossain Faiyaz",
      text: "Okay! Thats Great",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Nov 26",
    },
    {
      id: 5,
      name: "Junaid Asghar",
      text: "Hey, I Need a info",
      img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Dec 9",
    },
    {
      id: 6,
      name: "Salam Sheikh",
      text: "Are you there?",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Dec 2",
    },
    {
      id: 7,
      name: "Sohan",
      text: "I want to book a vendor",
      img: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Nov 20",
    },
    {
      id: 8,
      name: "Hossain Faiyaz",
      text: "Okay! Thats Great",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Nov 26",
    },
    {
      id: 9,
      name: "Junaid Asghar",
      text: "Hey, I Need a info",
      img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Dec 9",
    },
    {
      id: 10,
      name: "Salam Sheikh",
      text: "Are you there?",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Dec 2",
    },
    {
      id: 11,
      name: "Sohan",
      text: "I want to book a vendor",
      img: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Nov 20",
    },
    {
      id: 12,
      name: "Hossain Faiyaz",
      text: "Okay! Thats Great",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Nov 26",
    },
    {
      id: 13,
      name: "Junaid Asghar",
      text: "Hey, I Need a info",
      img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Dec 9",
    },
    {
      id: 14,
      name: "Salam Sheikh",
      text: "Are you there?",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Dec 2",
    },
    {
      id: 15,
      name: "Sohan",
      text: "I want to book a vendor",
      img: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Nov 20",
    },
    {
      id: 16,
      name: "Hossain Faiyaz",
      text: "Okay! Thats Great",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Nov 26",
    },
  ];
  return (
    <div className="max-h-[75vh] overflow-y-scroll">
      {/* SearchBar */}
      <div className="w-full flex gap-2 justify-between items-center border-b border-b-paginationBg-900 text-textSecondary-900 h-[60px] px-4">
        <input
          type="text"
          placeholder="Search....."
          className="w-full bg-transparent placeholder:text-textSecondary-900 border-none outline-none text-sm"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      {/* Message Components */}
      <div>
        {senderData.map((data) => (
          <NavLink to={`${data.name.toLowerCase.split(" ").splice(0, 1)}`}>
            <MessageSender
              img={data.img}
              date={data.date}
              name={data.name}
              text={data.text}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MessageSidebar;
