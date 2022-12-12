import React from "react";

const About = ({ about }) => {
  return (
    <section className="">
      <div className="about__content  bg-white shadow-md" ref={about}>
        <div className="about__top__content border-b border-paginationBg-900">
          <div className="about__heading px-5 py-4 text-lg lg:text-start text-center lg:text-2xl font-medium text-textBlack-900 border-b border-paginationBg-900">
            <h5 style={{ fontSize: "22px" }}>
              About THE MEMORY CAPTURE - Wedding Photographers
            </h5>
          </div>

          <div className="about__description py-6 px-5">
            <div className="top">
              <p className="text-sm leading-7 text-textSecondary-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                itaque blanditiis a eaque harum commodi dolorum laborum ea
                ratione, odio atque corrupti repellendus nihil perspiciatis
                alias quis sed! A nam explicabo natus doloribus, quaerat, nobis
                quasi facilis neque minus maiores sapiente sint adipisci
                reprehenderit ipsum illo deserunt architecto fuga, autem
                reiciendis quas? Impedit dolorum expedita accusantium corporis.
                Magnam, quibusdam! Nemo a omnis fuga nihil? Laboriosam officiis
                cupiditate aliquid perspiciatis nostrum dolorum veniam facere
                voluptate reprehenderit deserunt pariatur qui repellat, maxime
                quis quas totam, voluptatibus, non alias est obcaecati
                distinctio! Fuga iure, officiis assumenda sunt necessitatibus
                ullam voluptas cumque velit hic.
              </p>
            </div>
            <div className="working__style my-8">
              <span className="text-textBlack-900 font-bold text-sm">
                Working Style
              </span>
              <p className="text-sm leading-7 text-textSecondary-900 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                dolorum pariatur officia veritatis impedit veniam? Saepe quae
                perspiciatis cumque accusamus inventore unde ad hic velit nam
                dolore, officia nisi beatae aspernatur ipsum nulla ratione
                temporibus magni voluptate magnam, possimus repellendus eos
                quia! Deserunt earum aliquid ut laudantium esse perspiciatis
                nulla dolorum, blanditiis quasi nam alias cum officia. Natus
                error quis corrupti quaerat consectetur dolor earum. Hic aperiam
                perferendis distinctio molestias ducimus quasi dolorum modi
                error consectetur. Sint ab nemo rem, aliquam non molestias
                voluptatum numquam est, tempora quia quod ipsum quam labore
                nostrum beatae provident ducimus esse nam asperiores. Illum
                voluptatum officia sint, commodi minima repudiandae quia nisi
                doloremque fugit! Non quam minima, suscipit dolorum excepturi
                cupiditate in ex aperiam ad sunt doloribus explicabo eos
                numquam, neque unde harum reprehenderit quasi! Cum optio labore
                aut eligendi, voluptates deserunt fuga, voluptatibus tempora
                fugit beatae, obcaecati vero rem. Fuga enim aperiam ducimus?
              </p>
            </div>
            <div className="travel my-8">
              <span className="text-textBlack-900 font-bold text-sm">
                Travels to the venue
              </span>
              <p className="text-sm leading-7 text-textSecondary-900 mt-1">
                The team is open to travelling outstation as well to cover the
                events
              </p>
            </div>
            <div className="travel mt-8 mb-1">
              <span className="text-textBlack-900 font-bold text-sm">
                Services Offered
              </span>
              <p className="text-sm leading-7 text-textSecondary-900">
                The team offers services in :
              </p>
              <ul className="list-disc pl-8 flex flex-col gap-2 mt-1 text-textSecondary-900 text-sm">
                <li>Candid Photography</li>
                <li>Traditional Photography</li>
                <li>Pre-Wedding Photography</li>
                <li>Wedding Albums Photography</li>
                <li>Maternity Shoots</li>
                <li>Fashions Shoots</li>
                <li>Pre-Wedding Flims</li>
                <li>Traditional Videography</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about__bottom__content my-4 px-5 lg:py-4">
          <div className="about__bottom__wrapper flex justify-between items-center lg:flex-nowrap flex-wrap">
            <div className="item1 w-full md:pr-8">
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Been on{" "}
                  <span className="text-textPrimary-900">Site Name</span> Since
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  3 years 7 months
                </span>
              </div>
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Cinematography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  50,000 Rs Per day
                </span>
              </div>
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Traditional Photography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  10,000 Rs Per day
                </span>
              </div>
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Travel Cost
                </h5>
                <span className="text-textSecondary-900 text-sm pr-8">
                  Outstation Travel & Stay charges borne by client, Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Numquam, sed!
                </span>
              </div>
            </div>
            <div className="item2 w-full md:pr-8">
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Most Booked Package
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  3 years 7 months
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Studio Photography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  50,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Services offered
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  Outstation Travel & Stay charges borne by client, Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Numquam, sed!
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Budget (Photo Package)
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  10,000 Rs Per day
                </span>
              </div>
            </div>
            <div className="item3 w-full md:pr-8">
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Package Days
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  3 years 7 months
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Industry Experience
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  50,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Pre-Wedding Shoot
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  10,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Budget (Photo + Video)
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  Outstation Travel & Stay charges borne by client, Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Numquam, sed!
                </span>
              </div>
            </div>
            <div className="item4 w-full md:pr-8">
              <div className="mb-4">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Been on <span>Site Name</span> Since
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  3 years 7 months
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Cinematography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  50,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Traditional Photography
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  10,000 Rs Per day
                </span>
              </div>
              <div className="mb-4 pr-8">
                <h5 className="text-textBlack-900 font-bold text-sm">
                  Travel Cost
                </h5>
                <span className="text-textSecondary-900 text-sm">
                  Outstation Travel & Stay charges borne by client, Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Numquam, sed!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
