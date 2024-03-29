const UserBanner = () => {
  return (
    <div
      className="w-full h-[30vh] md:h-[50vh] bg-no-repeat bg-cover bg-top relative"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)),
        url("https://onehorizonproductions.com/wp-content/uploads/2022/03/Alfisha-Fahad-habib-Day-2-3-One-Horizon-Productions-52.jpg")`,
      }}
    >
      {/* Black Overlay */}
      <img
        src="https://images.wedmegood.com/images/image_gradient.png"
        alt=""
        className="w-full h-full absolute inset-0 filter blur-sm"
      />

      {/* Contents */}
      <div className="banner-blur w-full h-full z-[1000]">
        {/* Name */}
        <div
          className="absolute top-[50%] left-[50%]"
          style={{
            transform: "translate(-50%, -100%)",
          }}
        >
          <h1 className="text-white text-2xl lg:text-4xl font-medium">
            Junaid Weds
          </h1>
        </div>
        <div
          className="w-full lg:w-9/12 mx-auto h-[40%] lg:h-[20%] lg:pt-[15%] pt-[40%] flex justify-center gap-20"
          style={{
            border: "2px solid #fff",
            borderColor: "transparent transparent #fff transparent",
            borderRadius: "0px 0px 50% 50%",
          }}
        >
          <div className="bg-white lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] p-2 text-center rotate-6 lg:rotate-3 mt-[-12px] lg:mt-[-10px] flex flex-col justify-between items-center font-semibold text-textPrimary-900">
            <h1 className="lg:text-5xl text-xl">0</h1>
            <p className="text-[13px] md:text-base">MONTH</p>
          </div>

          <div className="bg-white lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] p-2 text-center -rotate-6 lg:-rotate-3 mt-[-12px] lg:mt-[-10px] flex flex-col justify-between items-center font-semibold text-textPrimary-900">
            <h1 className="lg:text-5xl text-xl">0</h1>
            <p className="text-[13px] md:text-base">DAY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBanner;
