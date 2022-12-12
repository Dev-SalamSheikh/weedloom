const ContactBanner = ({ background }) => {
  return (
    <div
      className="contact_banner h-[50vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
        url(${background})`,
      }}
    >
      <div className="contact_banner_content h-full flex justify-center items-center">
        <div className="contact_us_heading">
          <h1 className="text-6xl md:text-8xl text-white font-bold">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
