import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FilterPopup from "../Filter Popup/FilterPopup";
import Pagination from "../pagination/Pagination";
import Path from "../Routes path/Path";
import PhotoBudgetCard from "./PhotoBudgetCard";
import WpCardGrid from "./WpCardGrid";
import WpCardList from "./WpCardList";
import cardData from "../../CardData";

const WeddingPhotographer = () => {
  // All States
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  // Search Filter States
  const [search, setSearch] = useState("");

  // Function For View
  const gridViewOn = () => {
    setListView(false);
    setGridView(true);
  };

  const listViewOn = () => {
    setGridView(false);
    setListView(true);
  };

  // Toggle Menu Function For Mobile
  const toggleFilterMenu = () => {
    setShowFilter(!showFilter);
  };

  return (
    <section className="lg:py-8 py-0 text-textSecondary-900">
      <div className="wphotographer container mx-auto lg:px-20 px-0">
        <div className="hidden xl:block">
          <Path first="Home" second="Vendors" third="all" />
        </div>
        <div className="wphotographer__content">
          {/* Content Header Part */}
          <div className="hidden xl:block">
            <div className="wphotographer__content__header mt-4 mb-12 flex justify-between items-center">
              <div className="w-full">
                <h5 className="text-2xl font-semibold">
                  Wedding Photographers in Karachi
                </h5>
                <span className="text-sm">
                  Showing <strong>2089 results</strong> as per your search
                  criteria
                </span>
              </div>

              <div className="w-full">
                <NavLink to="/">
                  <div className="content__header__middle bg-white flex items-center w-max py-2 px-4 shadow-sm">
                    <i className="fa-solid fa-dna text-textPrimary-900 mr-4"></i>{" "}
                    <p className="text-base font-medium">
                      Need Help?{" "}
                      <span className="text-textPrimary-900 font-semibold">
                        WMG Genie
                      </span>{" "}
                      can help out
                    </p>{" "}
                    <i className="fa-solid fa-caret-down ml-2"></i>
                  </div>
                </NavLink>
              </div>

              <div className="w-full">
                <div className="content__header__right flex items-center gap-4">
                  <div className="searchBox w-8/12 border rounded-md py-2 px-4 text-dateColor-900">
                    <i className="fa-solid fa-magnifying-glass mr-4"></i>
                    <input
                      type="text"
                      placeholder="Search Photographers"
                      className="outline-none w-10/12 bg-transparent border-none focus:border-none text-textPrimary-900"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  <div className="viewItems flex justify-end gap-4">
                    <div
                      className={`list flex items-center cursor-pointer ${
                        listView ? "text-textPrimary-900" : ""
                      }`}
                      onClick={listViewOn}
                    >
                      <i className="fa-solid fa-bars-staggered text-lg"></i>{" "}
                      <span className="text-base ml-1">List</span>
                    </div>
                    <div
                      className={`gridItems flex items-center cursor-pointer ${
                        gridView ? "text-textPrimary-900" : ""
                      }`}
                      onClick={gridViewOn}
                    >
                      <i className="fa-solid fa-grip text-lg"></i>{" "}
                      <span className="text-base ml-1">Grid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Banner */}
          <div className="block xl:hidden bg-white">
            <div
              className="mobile_banner_content h-[10vh] bg-white flex items-end"
              style={{
                background:
                  "url('https://images.pexels.com/photos/2293102/pexels-photo-2293102.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="text-2xl text-white font-bold pl-4 pb-4">
                Wedding Photographers
              </h1>
            </div>
          </div>

          {/* Mobile FIilter */}
          <div className="block xl:hidden">
            <div className="content px-4 pt-4 flex justify-between gap-6">
              <div className="left w-9/12">
                <div className="searchBox flex items-center pl-6 p-2 rounded-full bg-tagsBackground-900">
                  <i className="fa-solid fa-magnifying-glass mr-4"></i>
                  <input
                    type="text"
                    placeholder="Search Wedding Photogra..."
                    className="w-full outline-none bg-transparent text-textPrimary-900
              "
                  />
                </div>
              </div>
              <div
                className="right w-3/12 flex items-center bg-tagsBackground-900 rounded-full p-2 cursor-pointer justify-center"
                onClick={() => setShowFilter(!showFilter)}
              >
                <i className="fa-solid fa-shuffle"></i>
                <span className="text-textSecondary-900 ml-2">Filter</span>
              </div>
              {showFilter && <FilterPopup toggleFilter={toggleFilterMenu} />}
            </div>
          </div>

          {/* Desktop Different View Content */}
          <div className="px-4 lg:px-0 pt-4 pb-8 lg:py-0">
            {/* Card Container - Grid View*/}
            {gridView && (
              <div className="grid__view flex flex-wrap">
                {cardData
                  .filter((card) => card.name.toLowerCase().includes(search))
                  .map((data) => {
                    const {
                      budget,
                      category,
                      id,
                      image,
                      location,
                      name,
                      rating,
                      reviews,
                      tooltip,
                    } = data;
                    return (
                      <WpCardGrid
                        img={image}
                        category={category}
                        location={location}
                        name={name}
                        price={budget}
                        review={rating}
                        tooltip1={tooltip}
                        tooltip2={tooltip}
                        totalReview={reviews}
                        key={id}
                      />
                    );
                  })}
              </div>
            )}

            {/* Card Container - List View */}
            {listView && (
              <div className="card__view md:flex gap-6">
                <div className="cardview__cards w-full md:w-9/12">
                  {cardData
                    .filter((card) => card.name.toLowerCase().includes(search))
                    .map((data) => {
                      const {
                        budget,
                        category,
                        id,
                        image,
                        location,
                        name,
                        rating,
                        reviews,
                        tooltip,
                        shortDesc,
                        voteOne,
                        voteTwo,
                      } = data;
                      return (
                        <WpCardList
                          budget={budget}
                          category={category}
                          image={image}
                          location={location}
                          name={name}
                          rating={rating}
                          shortdesc={shortDesc}
                          tooltip1={tooltip}
                          totalreviews={reviews}
                          vote1={voteOne}
                          vote2={voteTwo}
                          key={id}
                        />
                      );
                    })}
                </div>

                {/* Photographer Category */}
                <div className="cardview__right invisible md:visible md:w-3/12">
                  <div className="photographer_by_budget">
                    <PhotoBudgetCard
                      circle
                      heading="Photographer by Budget"
                      image1="https://images.pexels.com/photos/6085682/pexels-photo-6085682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      image2="https://images.pexels.com/photos/6544106/pexels-photo-6544106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      image3="https://images.pexels.com/photos/6543940/pexels-photo-6543940.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      image4="https://images.pexels.com/photos/11810879/pexels-photo-11810879.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      category1="Budget Friendly"
                      category2="Value For Money"
                      category3="Premium"
                      category4="Luxury"
                    />
                  </div>
                  <div className="photographer_by_type mt-8">
                    <PhotoBudgetCard
                      heading="Photographer by Type"
                      image1="https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      image2="https://images.pexels.com/photos/3872626/pexels-photo-3872626.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      image3="https://images.pexels.com/photos/8790775/pexels-photo-8790775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      image4="https://images.pexels.com/photos/12759473/pexels-photo-12759473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      category1="Pre wedding Photographer"
                      category2="Vaccinated Photographers"
                      category3="Top Rated Photographers"
                      category4="Photographers with deals"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Pagination */}
            <Pagination />
          </div>

          {/* Faq Sections Start */}
        </div>
      </div>
    </section>
  );
};

export default WeddingPhotographer;
