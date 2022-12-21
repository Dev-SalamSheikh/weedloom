import React from "react";
import UserLoveCard from "./UserLoveCard";

const UserLove = () => {
  return (
    // Card Calling
    <div>
      <UserLoveCard
        authorimg="https://www.thetorrancehotel.co.uk/wp-content/uploads/2020/02/torrance-wedding-suite-feb-hero.jpg"
        authorname="Hotel Grand Maple"
        image="https://eliaskordelakos.com/wp-content/uploads/sites/14206/2017/11/Grand-Resort-Lagonissi-3-1.jpg"
      />
      <UserLoveCard
        authorimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-77vImBRKqKr4LtMAQuUV6rrbJuupkvXfw&usqp=CAU"
        authorname="Karachi Grand Venue"
        image="https://static.wixstatic.com/media/a4989e_847cf82f539449019b0e66d4aaf96fef~mv2.png/v1/fill/w_640,h_626,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/a4989e_847cf82f539449019b0e66d4aaf96fef~mv2.png"
      />
    </div>
  );
};

export default UserLove;
