import React from "react";
import Chatbox from "./Chatbox";

const MobileMessage = () => {
  const user = true;
  return (
    <div>
      <Chatbox user={user} />
    </div>
  );
};

export default MobileMessage;
