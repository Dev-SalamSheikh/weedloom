import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const WeddingSetupBanner = () => {
  const [switchInput, setSwitchInput] = useState();
  return (
    <div
      className="w-full h-[60vh] bg-no-repeat bg-cover bg-center relative"
      style={{
        backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("http://weddingpakistani.com/wp-content/uploads/2017/03/13094358_799603150140839_7487438520438918512_n.jpg")`,
      }}
    >
      {/* Contents */}
      <div className="container mx-auto h-full z-[1000] flex justify-between items-center">
        {/* Left Side */}
        <div className="w-full">
          <h1 className="text-5xl text-white font-medium">
            Your wedding, your way!
          </h1>
          <p className="text-lg font-medium text-white mt-2">
            Simplify and manage all your wedding planning needs on{" "}
            <span className="text-textPrimary-900">WeedLoom</span>
          </p>
        </div>
        {/* Right Side */}
        <div className="w-full flex justify-center ">
          {/* Right Content */}
          <div className="w-6/12 bg-white p-4 shadow-md rounded-md">
            {/* Heading */}
            <h2 className="text-textPrimary-900 text-[15px] font-bold">
              I am the
            </h2>

            {/* Groom or bride */}
            <div className="my-4">
              {/* Radio Buttons */}
              <div className="flex justify-between items-center pr-24">
                <div>
                  <input
                    className="accent-textPrimary-900 scale-110"
                    type="radio"
                    id="Groom"
                    name="usertype"
                    value="Groom"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Groom"
                  >
                    Groom
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900 scale-110"
                    type="radio"
                    id="Bride"
                    name="usertype"
                    value="Bride"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Bride"
                  >
                    Bride
                  </label>
                </div>
              </div>
            </div>

            {/* Wedding Title */}
            <div>
              <p className="text-sm text-textSecondary-900 font-bold">
                WEDDING TITLE
              </p>
              <input
                type="text"
                placeholder="e.g. Janu weds Manu"
                className="w-full bg-transparent outline-none text-sm border-b focus:border-b-textPrimary-900 pb-2 mt-1 text-textSecondary-900"
              />
            </div>

            {/* Wedding Location */}
            <div className="my-3">
              <p className="text-sm text-textSecondary-900 font-bold">
                LOCATION
              </p>
              <input
                type="text"
                placeholder="e.g. Karachi"
                className="w-full bg-transparent outline-none text-sm border-b focus:border-b-textPrimary-900 pb-2 mt-1 text-textSecondary-900"
              />
            </div>

            {/* Wedding Date */}
            <div className="my-4">
              <p className="text-sm text-textSecondary-900 font-bold">
                WEDDING DATE
              </p>
              <div className="border-b">
                <ReactDatePicker
                  selected={switchInput}
                  onChange={(e) => setSwitchInput(e)}
                  dateFormat="MMMM d, yyyy"
                  placeholderText="e.g. Jan 10, 2023"
                  className="outline-none border-none text-sm text-textSecondary-900 w-full mt-1 pb-2"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="text-center mt-5 mb-1">
              <button className="w-[95%] py-4 text-sm font-semibold rounded-md text-white bg-textPrimary-900">
                CREATE WEDDING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSetupBanner;
