import React from "react";
import CommentCard from "./comment card/CommentCard";
import SectionHeader from "../SectionHeader";
import LeaveComment from "../leave a comment/LeaveComment";
import { NavLink } from "react-router-dom";

const CommentBox = () => {
  return (
    <div className="commentBox my-8">
      <div className="container mx-auto lg:px-20 px-4 text-textSecondary-900">
        <LeaveComment />
        <SectionHeader text="Recent Comments" />
        <div className="comment_content mt-4 mb-8">
          <CommentCard
            image="https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=1600"
            author="Salam Sheikh"
            comments="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tempore, ex quo minima aliquam quos"
            date="12 Aug 2022"
          />
          <CommentCard
            image="https://images.pexels.com/photos/2781104/pexels-photo-2781104.jpeg?auto=compress&cs=tinysrgb&w=1600"
            author="Junaid"
            comments="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tempore, ex quo minima aliquam quos"
            date="10 Apr 2022"
          />
          <CommentCard
            image="https://images.pexels.com/photos/1253370/pexels-photo-1253370.jpeg?auto=compress&cs=tinysrgb&w=1600"
            author="Hossain Mohammad"
            comments="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tempore, ex quo minima aliquam quos"
            date="01 Feb 2022"
          />
          <div className="buttonDiv w-full text-center">
            <NavLink to="/allcomments">
              <button className="py-2 px-4 bg-textPrimary-900 text-white font-medium rounded-full text-sm">
                View all Comments
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
