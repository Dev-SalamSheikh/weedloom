import React from "react";
import { NavLink } from "react-router-dom";
import LatestReview from "../reviews/LatestReview";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div className="faqs bg-white py-10">
      <div className="faqs__container container mx-auto md:px-20 px-4">
        {/* Faqs Top Content */}
        <div className="faqs__top__content">
          {/* Photographer Description */}
          <div className="best__desc text-textSecondary-900 mb-5">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3">
              Best Photographers in Lahore
            </h4>
            <p className="lg:text-base text-sm leading-7">
              Well Lahorekars! if you're having a Lahore Wedding (Whatever you
              wanna call it) and you are looking for wedding photographers, you
              will be spoilt for choice, trust us on this!. Lahore, the city of
              dreams and aspirations is a host to so many talented wedding
              photography professionals - be it freelancers, studio or candid
              specialists or amazing cinematographers in Bombay. To make it easy
              for you, (Site Name) has put together the best wedding photography
              price packages for top vendors in the category of wedding
              photographers in Lahore.
            </p>
          </div>

          {/* How Does Help Div */}
          <div className="help mb-5">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3">
              How does (Site Name) help?
            </h4>
            <ul className="list-disc pl-4 lg:text-base text-sm">
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Information at your fingertips-{" "}
                  </strong>{" "}
                  <NavLink to="/app">
                    <span className="text-textPrimary-900">
                      Through our App
                    </span>
                  </NavLink>{" "}
                  or Website you can browse through hundreds of wedding
                  photographers in Lahore and choose the perfect one for you!
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Pictures and reviews-{" "}
                  </strong>{" "}
                  Images of events covered by the professional in the past and
                  reviews by other couples help you gauge the level of
                  experience and quality of service provided, in our “real
                  wedding” category. The best rated ones boast of impeccable
                  attention to detail and utmost professionalism in the work of
                  the featured wedding photographers from Lahore.
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Link to website and contact information-{" "}
                  </strong>{" "}
                  After your initial browsing, you can take things forward by
                  talking directly to your shortlisted Lahore photographers.
                </p>
              </li>
            </ul>
          </div>

          {/* Faq's Card Start */}

          <div className="faqs__cards">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3">
              Frequently Asked Questions
            </h4>

            <div className="faqs__card">
              <FaqCard
                faqTitle="How do I find the best of all the wedding photographers in Lahore for myself?"
                faqContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            earum. Magni sed eaque perspiciatis est quo dolorem nemo, et
            voluptatem asperiores sequi assumenda repudiandae obcaecati deleniti
            doloremque a, adipisci atque ipsa minima. Blanditiis minus, soluta
            provident sunt doloremque et dignissimos quaerat, eaque ratione
            accusantium expedita architecto dolorem suscipit itaque incidunt."
              />

              <FaqCard
                faqTitle="Will I be able to find a quality photographer if I am on a budget"
                faqContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            earum. Magni sed eaque perspiciatis est quo dolorem nemo, et
            voluptatem asperiores sequi assumenda repudiandae obcaecati deleniti
            doloremque a, adipisci atque ipsa minima. Blanditiis minus, soluta
            provident sunt doloremque et dignissimos"
              />

              <FaqCard
                faqTitle="How much does a wedding photographer charge for a day in Lahore?"
                faqContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            earum. Magni sed eaque perspiciatis est quo dolorem nemo, et
            voluptatem asperiores sequi assumenda repudiandae obcaecati deleniti
            doloremque a, adipisci atque ipsa minima. Blanditiis"
              />

              <FaqCard
                faqTitle="How do I efficiently use the WedMeGood website to choose a photographer for my wedding?"
                faqContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            earum. Magni sed eaque perspiciatis est quo dolorem nemo, et
            voluptatem asperiores sequi"
              />

              <FaqCard
                faqTitle="Can we hire one common photographer from the bride and groom’s side?"
                faqContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            earum. Magni sed eaque perspiciatis est quo dolorem nemo, et
            voluptatem asperiores sequi assumenda repudiandae obcaecati deleniti
            doloremque a, adipisci atque ipsa minima. Blanditiis minus, soluta
            provident sunt doloremque et dignissimos quaerat, eaque ratione
            accusantium expedita architecto dolorem suscipit itaque incidunt."
              />
            </div>
          </div>

          {/* What can we expect from the photographers */}
          <div className="what_can_we_expect">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3">
              What can you expect from the photographers?
            </h4>
            <ul className="list-disc pl-4 lg:text-base text-sm">
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Pre wedding shoot-{" "}
                  </strong>{" "}
                  Off late, more and more young engaged couples are getting a
                  photoshoot done prior to their big day. These are quite laid
                  back and fun and sometimes themes and props are also used in
                  the pre wedding photography.
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Traditional photography-{" "}
                  </strong>{" "}
                  Who can say no to timeless pictures? We think they are classic
                  and the best! You can hire Lahore photographers, by browsing
                  through our vendor category in photography section to get
                  yourself a traditional photographer.
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Candid photography-{" "}
                  </strong>{" "}
                  A trend that had kicked in since a few years. Weddings are all
                  about being fun and candid and let the photographer capture
                  the most raw and candid moments this season for your beautiful
                  Lahore wedding..
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Traditional Videography-{" "}
                  </strong>{" "}
                  Regular filming by Lahore Videographers that yields hours of
                  perfect moments in video.
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Cinematography-{" "}
                  </strong>{" "}
                  The concept is akin to a mini Bollywood movie where the couple
                  is the main lead. There's music, dance and heartfelt messages
                  for the bride and groom. Cinematography is the epitome of
                  perfect wedding videography and we couldn't agree more!
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Wedding photography with Drone-{" "}
                  </strong>{" "}
                  With technology touching each and every aspect of our daily
                  lives, how can weddings be left behind? Using drones to
                  capture aerial wedding photography shots is in vogue right
                  now. Destination weddings are seeing a rise in drone
                  photography.
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Studio photography-{" "}
                  </strong>{" "}
                  As the name suggests, these wedding pictures are clicked in
                  the artist's studio with lighting, camera equipment, white
                  backgrounds etc.
                </p>
              </li>
              <li className="mb-2">
                <p className="text-textSecondary-900 leading-7">
                  <strong className="text-textBlack-900 font-extrabold">
                    Albums-{" "}
                  </strong>{" "}
                  Yes guys, wedding Albums are back in trend! This service might
                  entail for an extra charge, but the joy of flipping through
                  pages of memories is just par excellence. Photo books, Coffee
                  table books and other types of albums can be created with
                  still pictures.
                </p>
              </li>
            </ul>
          </div>

          {/* Popular Searches */}
          <div className="popular__search mt-6 lg:mt-20 text-center lg:text-start">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3">
              Popular Searches
            </h4>
            <div className="popular_search_content flex justify-between w-full text-dateColor-900 flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0">
              <div className="polular_search_one w-full">
                <ul className="lg:text-base text-sm">
                  <li className="mb-2">Best Wedding Photographers in Lahore</li>
                  <li className="mb-2">Best Wedding Photographers in Lahore</li>
                  <li className="mb-2">Best Wedding Photographers in Lahore</li>
                  <li className="mb-2">Best Wedding Photographers in Lahore</li>
                  <li className="mb-2">Best Wedding Photographers in Lahore</li>
                  <li className="mb-2">Best Wedding Photographers in Lahore</li>
                </ul>
              </div>
              <div className="polular_search_two w-full">
                <ul className="lg:text-base text-sm">
                  <li className="mb-2">Wedding Photo Studio near me</li>
                  <li className="mb-2">Wedding Photo Studio near me</li>
                  <li className="mb-2">Wedding Photo Studio near me</li>
                  <li className="mb-2">Wedding Photo Studio near me</li>
                  <li className="mb-2">Wedding Photo Studio near me</li>
                </ul>
              </div>
              <div className="polular_search_three w-full">
                <ul className="lg:text-base text-sm">
                  <li className="mb-2">
                    Wedding Photography in and around Islamabad
                  </li>
                  <li className="mb-2">
                    Wedding Photography in and around Islamabad
                  </li>
                  <li className="mb-2">
                    Wedding Photography in and around Islamabad
                  </li>
                  <li className="mb-2">
                    Wedding Photography in and around Islamabad
                  </li>
                  <li className="mb-2">
                    Wedding Photography in and around Islamabad
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search By Type */}
          <div className="by_type mt-6 lg:mt-10 text-center lg:text-start">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3">
              By Type
            </h4>
            <div className="popular_search_content flex justify-between w-full text-dateColor-900 flex-wrap lg:flex-nowrap">
              <div className="polular_search_one w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2 lg:text-base text-sm">
                      Candid Wedding Photography in Lahore
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="polular_search_two w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2 lg:text-base text-sm">
                      Traditional Wedding Photography in Lahore
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="polular_search_three w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2 lg:text-base text-sm">
                      Pre Wedding Photographers in Lahore
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>

          {/* Search By Locality */}
          <div className="by_type lg:mt-10 mt-6 text-center lg:text-start">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3">
              By Locality
            </h4>
            <div className="popular_search_content flex justify-between w-full text-dateColor-900 flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0">
              <div className="polular_search_one w-full">
                <ul className="text-sm lg:text-base">
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Islamabad (1241)
                    </li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Islamabad (1241)
                    </li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Islamabad (1241)
                    </li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Islamabad (1241)
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="polular_search_two w-full">
                <ul className="text-sm lg:text-base">
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Western Faisalabad (773)
                    </li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Western Faisalabad (773)
                    </li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Western Faisalabad (773)
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="polular_search_three w-full">
                <ul className="text-sm lg:text-base">
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Karachi (266)
                    </li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Karachi (266)
                    </li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">
                      Wedding Photographers in Karachi (266)
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>

          {/* Latest Review Section */}
          <div className="latest__reviews lg:my-12 mt-12">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3">
              Latest Reviews
            </h4>
            <div className="latest__review__container">
              <LatestReview
                avatar="https://images.pexels.com/photos/10332895/pexels-photo-10332895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                category="The Wedding Shading"
                shortReview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fuga Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, fuga?"
                name="Samidha Piyush"
                date="20 Aug 2022"
              />
              <LatestReview
                avatar="https://images.pexels.com/photos/10332902/pexels-photo-10332902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                category="The Wedding Shading"
                shortReview="Debitis rerum optio numquam, minima expedita doloribus molestiae, nam harum sed qui magni quaerat alias molestias, assumenda reiciendis ipsa reprehenderit at nostrum."
                name="Samidha Piyush"
                date="20 Aug 2022"
              />
              <LatestReview
                avatar="https://images.pexels.com/photos/13066341/pexels-photo-13066341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                category="The Wedding Shading"
                shortReview="amet consectetur adipisicing elit. Dolor, provident modi error ducimus nam"
                name="Samidha Piyush"
                date="20 Aug 2022"
              />
              <LatestReview
                avatar="https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                category="The Wedding Shading"
                shortReview="amet consectetur adipisicing elit. Dolor, provident modi error ducimus nam quasi voluptatibus quos sequi deserunt"
                name="Samidha Piyush"
                date="20 Aug 2022"
              />
              <LatestReview
                avatar="https://images.pexels.com/photos/3872614/pexels-photo-3872614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                category="The Wedding Shading"
                shortReview="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, provident modi error ducimus nam quasi voluptatibus quos sequi deserunt quo consectetur sed id repellat cumque nesciunt accusamus eligendi eius nostrum."
                name="Samidha Piyush"
                date="20 Aug 2022"
              />
            </div>
          </div>

          {/* More Vendors */}
          <div className="more_vendors mb-10 lg:block hidden">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3 text-center lg:text-start">
              More Vendors in Mumbai
            </h4>
            <div className="popular_search_content flex justify-between w-full text-dateColor-900 flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0 text-center lg:text-start">
              <div className="polular_search_one w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Entertainment in Islamabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Entertainment in Islamabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Entertainment in Islamabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Entertainment in Islamabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Entertainment in Islamabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Entertainment in Islamabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Entertainment in Islamabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Entertainment in Islamabad</li>
                  </NavLink>
                </ul>
              </div>
              <div className="polular_search_two w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Videography in Faisalabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Videography in Faisalabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Videography in Faisalabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Videography in Faisalabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Videography in Faisalabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Videography in Faisalabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Videography in Faisalabad</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wedding Videography in Faisalabad</li>
                  </NavLink>
                </ul>
              </div>
              <div className="polular_search_three w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2">Bridal Makeup in Multan</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Bridal Makeup in Multan</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Bridal Makeup in Multan</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Bridal Makeup in Multan</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Bridal Makeup in Multan</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Bridal Makeup in Multan</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Bridal Makeup in Multan</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>

          {/* Top Articles to Read */}
          <div className="top__article mb-0 lg:block hidden">
            <h4 className="text-lg font-bold text-textSecondary-900 mb-3 text-center lg:text-start">
              Top Articles To Read
            </h4>
            <div className="popular_search_content flex justify-between w-full text-dateColor-900 flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0 text-center lg:text-start">
              <div className="polular_search_one w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2"> Peshawar Lehangas</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2"> Peshawar Lehangas</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2"> Peshawar Lehangas</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2"> Peshawar Lehangas</li>
                  </NavLink>
                </ul>
              </div>
              <div className="polular_search_two w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2">Best Bridal Entry Songs</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Best Bridal Entry Songs</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Best Bridal Entry Songs</li>
                  </NavLink>
                </ul>
              </div>
              <div className="polular_search_three w-full">
                <ul>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wittiest Wedding Hashtags</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wittiest Wedding Hashtags</li>
                  </NavLink>
                  <NavLink to="/search/type">
                    <li className="mb-2">Wittiest Wedding Hashtags</li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
