import React from "react";
import { NavLink } from "react-router-dom";
// Image Data File Import
import ImageData from "../../ImageData";
// Paginatio Components Import
import Pagination from "../pagination/Pagination";

const GalleryGrid = () => {
  return (
    <div className="gridItem py-8 lg:px-12 px-2">
      {/* Heading */}
      <div className="heading flex justify-center">
        <span className="text-xl text-textPrimary-900 font-bold">
          Browse Photos by This Vendor
        </span>
      </div>

      {/* Grid Gallery Start */}
      <div className="gridItems_images grid grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-x-6 lg:gap-y-8 gap-y-4 mt-8">
        {ImageData.map((image) => (
          <NavLink to="/gallery">
            <div className="image lg:h-60 h-48" key={image.id}>
              <img
                src={image.image}
                alt="galleryItemImage"
                className="w-full h-full rounded-md"
              />
            </div>
          </NavLink>
        ))}
      </div>
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default GalleryGrid;
