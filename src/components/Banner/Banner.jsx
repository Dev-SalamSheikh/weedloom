import { useRef } from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MobileVendors from "../MobileVendors";
import "./Banner.css";

const Banner = () => {
  // Vendors Option
  const vendorsList = [
    { key: 1, value: "Venues" },
    { key: 2, value: "Photographer" },
    { key: 3, value: "Bridal Makeup" },
    { key: 4, value: "Bridal Wear" },
    { key: 5, value: "Groom Wear" },
    { key: 6, value: "Decorators" },
    { key: 7, value: "Wedding Planner" },
    { key: 8, value: "Invitation" },
    { key: 9, value: "Cinema/Video" },
    { key: 10, value: "Mehndi Artist" },
    { key: 11, value: "Caterins Services" },
    { key: 12, value: "Cakes" },
    { key: 13, value: "DJ's" },
    { key: 14, value: "Wedding Planning" },
    { key: 15, value: "Wedding Categories" },
    { key: 16, value: "Accesories" },
    { key: 17, value: "Favours" },
  ];

  // City List
  const cityOptions = [
    { key: 1, value: "Islamabad" },
    { key: 2, value: "Karachi" },
    { key: 3, value: "Bahawalpur" },
    { key: 4, value: "Sialkot" },
    { key: 5, value: "Sargodha" },
    { key: 6, value: "Quetta" },
    { key: 7, value: "Peshawar" },
    { key: 8, value: "Hyderabad" },
    { key: 9, value: "Gujranwala" },
    { key: 10, value: "Multan" },
    { key: 11, value: "Rawalpindi" },
    { key: 12, value: "Faisalabad" },
    { key: 13, value: "Lahore" },
  ];

  const [open, setOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectCity, setSelectCity] = useState("");

  const selectInputValue = (e) => {
    setSelected(e.target.value);
  };

  const selectCityValue = (e) => {
    setSelectCity(e.target.value);
  };

  const selectValueOpen = (option) => {
    setSelected(option);
    setOpen(!open);
  };

  const selectCityValueOption = (option) => {
    setSelectCity(option);
    setCityOpen(!cityOpen);
  };

  // Close Dropdown When Click

  const ref = useRef();
  const ref2 = useRef();

  useEffect(() => {
    const closePopup = (e) => {
      if (!ref.current.contains(e.target) && !ref2.current.contains(e.target)) {
        setOpen(false);
        setCityOpen(false);
      }
    };
    document.addEventListener("click", closePopup);
    return () => {
      document.removeEventListener("click", closePopup);
    };
  }, [open, cityOpen]);

  return (
    // Banner Start
    <div className="banner text-white">
      {/* Positoning this we can control the mobile menu and also the postion of banner content */}
      <div className="banner__content relative w-full flex-wrap flex items-center justify-center">
        <div className="wrapper absolute bottom-14 lg:bottom-0 flex flex-wrap md:items-center flex-col md:px-0 px-6">
          <h1 className="text-3xl md:text-4xl md:mb-3 mb-2 font-semibold">
            Your Wedding, Your Way
          </h1>
          <h2 className="text-base font-medium md:text-lg">
            Find the best wedding vendors with thousands of trusted reviews
          </h2>

          {/* For Desktop Mode City List */}
          <div className="for_Desktop hidden xl:block">
            <div className="dropdown__container flex my-5 w-full">
              {/* Select Vendor Dropdown */}
              <div className="vendor__container w-5/12" ref={ref}>
                <div className="vendor__container__wrapper relative w-full border-r">
                  <div
                    className="input__container"
                    onClick={() => setOpen(!open)}
                  >
                    <input
                      type="text"
                      placeholder="Select Vendor"
                      value={selected}
                      onChange={selectInputValue}
                      className="p-3 w-full outline-none border-none text-textSecondary-900 font-medium cursor-pointer"
                    />
                    <div className="input__arrow__container absolute right-3 bottom-3 text-black">
                      <i className="fa-solid fa-chevron-down cursor-pointer"></i>
                    </div>
                  </div>
                  {/* Dropdown Open */}
                  {open && (
                    <div className="dropdown border-t-2 box-border absolute w-full">
                      <div className="max-h-[200px] overflow-scroll border border-t-0">
                        {vendorsList
                          .filter((v) =>
                            v.value.toLocaleLowerCase().includes(selected)
                          )
                          .map((opt) => (
                            <div
                              className="bg-white text-black p-2 flex items-center cursor-pointer hover:bg-gray-300 text-sm"
                              key={opt.key}
                              onClick={() => selectValueOpen(opt.value)}
                            >
                              {opt.value}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Select City Container */}
              <div className="city__container w-5/12" ref={ref2}>
                <div className="city__container__wrapper relative w-full border-r-2">
                  <div
                    className="input__container"
                    onClick={() => setCityOpen(!cityOpen)}
                  >
                    <input
                      type="text"
                      placeholder="Select City"
                      value={selectCity}
                      onChange={selectCityValue}
                      className="p-3 w-full outline-none border-none text-textSecondary-900 font-medium cursor-pointer"
                    />
                    <div className="input__arrow__container absolute right-3 bottom-3 text-black">
                      <i className="fa-solid fa-chevron-down cursor-pointer"></i>
                    </div>
                  </div>
                  {cityOpen && (
                    <div className="dropdown border-t-2 box-border absolute w-full border-l-2 z">
                      <div className="max-h-[200px] overflow-scroll border border-t-0">
                        {cityOptions
                          .filter((city) =>
                            city.value.toLocaleLowerCase().includes(selectCity)
                          )
                          .map((opt) => (
                            <div
                              className="bg-white text-black p-2 flex items-center cursor-pointer hover:bg-gray-300 text-sm"
                              key={opt.key}
                              onClick={() => selectCityValueOption(opt.value)}
                            >
                              {opt.value}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="submit w-2/12">
                <NavLink to="/search">
                  <button className="bg-navbarBGL-900 p-3">Get Started</button>
                </NavLink>
              </div>
            </div>
            <div className="search__result flex mb-10">
              <div className="heading mr-5">
                <p>Popular Searches: </p>
              </div>
              <div className="content">
                <p>
                  Wedding Photographers in Pakistan | Bridal Makeup in Pakistan
                  | Wedding Cards in Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vendor Show */}
        <div
          className="mobile_vendors block xl:hidden w-full px-6 absolute"
          style={{ bottom: "-23px" }}
        >
          <MobileVendors />
        </div>
      </div>
    </div>
    // Banner End
  );
};

export default Banner;
