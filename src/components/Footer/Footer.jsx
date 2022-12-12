import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className={`lg:py-14 py-6 bg-white`}>
      <div className="popular_venue container mx-auto md:px-20 px-4 text-textSecondary-900">
        <div className="w-full">
          <div className="footer__top w-full flex-wrap md:flex-nowrap">
            <h5 className="text-base font-bold">
              Site Name - Your Personal Wedding Planner
            </h5>
            <p className="text-sm my-4">Plan your wedding with Us</p>
            <span className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              molestiae repellat culpa architecto adipisci voluptatum sed
              voluptas, ipsa repudiandae! Hic deleniti numquam temporibus sed id
              eius necessitatibus eaque consectetur, nihil blanditiis minus
              incidunt repellendus? Recusandae, voluptatem et dolor delectus
              accusamus eveniet sint ab. Fuga non explicabo hic laboriosam ex
              vel voluptatem rerum id modi dolor. Distinctio delectus similique
              repellat adipisci aut eum. Perspiciatis quos esse asperiores unde.
              Odit voluptates veritatis similique impedit saepe possimus
              blanditiis sit quae? Repellendus, commodi quaerat. Asperiores
              saepe commodi autem dolor tempora nisi quasi laudantium at ad
              temporibus aspernatur neque et a ut, quia possimus animi.
            </span>
          </div>

          {/* Footer Contact */}
          <div className="footer__contact w-full flex justify-between my-6 border-t md:my-8 md:flex-nowrap flex-wrap gap-8 pt-6">
            <div className="footger__contact__left w-full lg:w-6/12 justify-center text-center lg:text-start">
              <p className="font-bold">Contact us to get best deals</p>
              <div className="main__number my-4 text-sm">
                <span>admin@example.com | info@example.com</span>
                <p>01240-126812345</p>
              </div>
              <span className="font-bold">Get Latest Blog Alerts</span>
              <div className="email__section flex w-full my-4 justify-center lg:justify-start">
                <div className="input_div flex w-10/12 border border-paginationBg-900">
                  <input
                    type="text"
                    placeholder="Email"
                    className="outline-none text-textSecondary-900 p-3 border-none w-full"
                  />
                  <button className="bg-textPrimary-900 p-3 text-white font-semibold">
                    Submit
                  </button>
                </div>
              </div>
              <div className="button__div flex gap-2 justify-center lg:justify-start">
                <button className="p-2 md:p-4 text-textPrimary-900 border border-textPrimary-900 rounded-md hover:bg-textPrimary-900 hover:text-white duration-300 font-semibold">
                  Submit Wedding
                </button>
                <button className="p-2 md:p-4 text-textBlue-900 border border-textBlue-900 rounded-md hover:bg-textBlue-900 hover:text-white duration-300 font-semibold">
                  Register a Vendor
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer__contact__middle w-full lg:w-6/12 font-bold">
              <p className="font-bold text-center">Follow us on:</p>
              <div className="w-full flex items-center justify-center gap-8 mt-4 lg:mt-16">
                <a href="*">
                  <i
                    className="fa-brands fa-facebook text-4xl"
                    style={{ color: "#4267B2" }}
                  ></i>
                </a>
                <a href="*">
                  <i
                    className="fa-brands fa-twitter text-4xl"
                    style={{ color: "#1DA1F2" }}
                  ></i>
                </a>
                <a href="*">
                  <i
                    className="fa-brands fa-pinterest text-4xl"
                    style={{ color: "#E60023" }}
                  ></i>
                </a>
                <a href="*">
                  <i
                    className=" fa-brands fa-instagram text-4xl"
                    style={{ color: "red" }}
                  ></i>
                </a>
                <a href="*">
                  <i
                    className="fa-brands fa-linkedin text-4xl"
                    style={{
                      color: "#0072b1",
                    }}
                  ></i>
                </a>
                <a href="*">
                  <i
                    className=" fa-brands fa-youtube text-4xl"
                    style={{ color: "red" }}
                  ></i>
                </a>
              </div>
            </div>
            <div className="footger__contact__right lg:items-center w-full lg:w-5/12 flex flex-col md:justify-start justify-center items-center">
              <p className="font-bold mb-4">Get The (Site Name) App</p>
              <div className="playstore__image">
                <img
                  src="https://logodix.com/logo/2004164.png"
                  alt=""
                  className="w-44 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <hr />

          {/* Footer Bottom */}

          <div className="footer__bottom flex gap-8 md:gap-0 justify-between lg:mt-12 my-4 md:flex-nowrap flex-wrap text-center md:text-start">
            <div className="div1 w-full">
              <span className="font-semibold text-base mb-8">
                Start Planning
              </span>
              <ul className="flex flex-col gap-2 lg:mt-6 mt-2 lg:text-base text-sm">
                <li>
                  <NavLink to="/">Birdal Wear</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Jewellery</NavLink>
                </li>
                <li>
                  <NavLink to="/">Makeup and Hair</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Decor</NavLink>
                </li>
                <li>
                  <NavLink to="/">Search By City</NavLink>
                </li>
              </ul>
            </div>
            <div className="div2 w-full">
              <span className="font-semibold text-base mb-8">
                Wedding Ideas
              </span>
              <ul className="flex flex-col gap-2 mt-2 lg:text-base text-sm">
                <li>
                  <NavLink to="/">Birdal Wear</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Jewellery</NavLink>
                </li>
                <li>
                  <NavLink to="/">Makeup and Hair</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Decor</NavLink>
                </li>
              </ul>
            </div>
            <div className="div3 w-full">
              <span className="font-semibold text-base mb-8">
                Photo Gallery
              </span>
              <ul className="flex flex-col gap-2 mt-2 lg:text-base text-sm">
                <li>
                  <NavLink to="/">Birdal Wear</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Jewellery</NavLink>
                </li>
                <li>
                  <NavLink to="/">Makeup and Hair</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Decor</NavLink>
                </li>
                <li>
                  <NavLink to="/">Search By City</NavLink>
                </li>
                <li>
                  <NavLink to="/">Download Our App</NavLink>
                </li>
                <li>
                  <NavLink to="/">Top Rated Vendors</NavLink>
                </li>
                <li>
                  <NavLink to="/">Destination Wedding</NavLink>
                </li>
                <li>
                  <NavLink to="/">Mehndi Design</NavLink>
                </li>
              </ul>
            </div>
            <div className="div4 w-full">
              <span className="font-semibold text-base mb-8">Home</span>
              <ul className="flex flex-col gap-2 mt-2 lg:text-base text-sm">
                <li>
                  <NavLink to="/">Birdal Wear</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Jewellery</NavLink>
                </li>
                <li>
                  <NavLink to="/">Makeup and Hair</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Decor</NavLink>
                </li>
                <li>
                  <NavLink to="/">Search By City</NavLink>
                </li>
              </ul>
            </div>
            <div className="div5 w-full">
              <span className="font-semibold text-base mb-8">
                Wedding Invitation Maker
              </span>
              <ul className="flex flex-col gap-2 mt-2 lg:text-base text-sm">
                <li>
                  <NavLink to="/">Birdal Wear</NavLink>
                </li>
                <li>
                  <NavLink to="/">Wedding Jewellery</NavLink>
                </li>
                <li>
                  <NavLink to="/">Makeup and Hair</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
