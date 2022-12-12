/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const GoogleMap = () => {
  return (
    <div className="container mx-auto xl:w-3/4 rounded-md mt-8 mb-8 md:mt-16 md:mb-12">
      <div className="google__map md:px-20 px-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108852.7477012182!2d74.28594340331836!3d31.506347821091165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sbd!4v1662587967871!5m2!1sen!2sbd"
          height="450"
          style={{ width: "100%", border: "0px" }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
