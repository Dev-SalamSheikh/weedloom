import React from "react";
import ShortListCard from "./ShortListCard";

const UserShortlists = () => {
  return (
    <div className="w-full h-full">
      {/* Heading */}
      <div className="p-4 border-b border-b-paginationBg-900">
        <h2 className="text-base tracking-widest text-textSecondary-900 leading-none">
          Venues
        </h2>
      </div>

      {/* Content */}
      <div className="my-4 px-4">
        {/* Card */}
        <ShortListCard
          image="https://www.thetorrancehotel.co.uk/wp-content/uploads/2020/02/torrance-wedding-suite-feb-hero.jpg"
          name="Hotel Grand Maple"
          finalize
          price="30,000"
        />
        <ShortListCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-77vImBRKqKr4LtMAQuUV6rrbJuupkvXfw&usqp=CAU"
          name="Hotel Kashmiri Swag"
          finalize
          price="30,000"
        />
        <ShortListCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9NgiNp71lSvrOH56HcGWv3Zzlbx11sG8aw&usqp=CAU"
          name="Karachi Grand Venues"
          finalize
          price="30,000"
        />
      </div>
    </div>
  );
};

export default UserShortlists;
