import React from "react";
import ContactCardSingle from "./ContactCardSingle";

const ContactCard = () => {
  return (
    <div className="contact_card container mx-auto my-4 md:my-16">
      <div className="container mx-auto xl:w-3/4">
        <div className="contact_card_container px-6">
          <ContactCardSingle />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
