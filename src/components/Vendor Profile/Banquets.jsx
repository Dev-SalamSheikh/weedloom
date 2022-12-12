import React from "react";
import { useState } from "react";

const Banquets = () => {
  // States
  const [openPopup, setOpenPopup] = useState(false);
  const [value, setValue] = useState({
    name: "",
    fixedC: "",
    floatC: "",
    vendorType: "",
  });
  const [data, setData] = useState([]);
  const [deletedPopup, setDeletedPopup] = useState(false);

  // Form Submit Function
  const formSubmitted = (e) => {
    e.preventDefault();
    setData([...data, value]);
    setValue({
      name: "",
      fixedC: "",
      floatC: "",
      vendorType: "",
    });
    console.log(data);
    setOpenPopup(false);
  };

  // Remove Banquets Function
  const deleteBanquetes = (i) => {
    const datalist = [...data];
    datalist.splice(i, 1);
    setData(datalist);
    setDeletedPopup(!deletedPopup);
  };

  // Delete Modal
  if (deletedPopup === true) {
    setTimeout(() => {
      setDeletedPopup(!deletedPopup);
    }, 2000);
  }

  return (
    <div className="w-full h-full">
      {/* Heading */}
      <div className="bg-sectionBg-900 px-4 py-3 flex justify-between items-center">
        <h2 className="text-textSecondary-900 text-lg">Banquets</h2>
        <button
          onClick={() => setOpenPopup(true)}
          className={`border border-paginationBg-900 py-2 px-4 text-sm rounded-sm`}
        >
          Add Bunquets
        </button>
      </div>

      {/* Content */}
      <div className="w-full h-full">
        {/* Initial Div */}
        {data.length < 1 && (
          <div className="flex items-center flex-col my-16 gap-4">
            <p className="text-textSecondary-900 font-semibold">
              No Banquets found. Add a new banquet
            </p>
            <button
              onClick={() => setOpenPopup(!openPopup)}
              className={`bg-textPrimary-900 text-white border border-paginationBg-900 py-2 px-4 text-sm rounded-sm`}
            >
              Add Bunquets
            </button>
          </div>
        )}

        {data.length >= 1 && (
          <>
            <div className="w-full flex justify-between px-4 border-b-paginationBg-900 border-b mt-4 pb-2">
              <div className="w-[20%]">
                <p className="font-semibold text-textSecondary-900 text-[15px]">
                  Title
                </p>
              </div>
              <div className="w-[20%]">
                <p className="font-semibold text-textSecondary-900 text-[15px]">
                  Type
                </p>
              </div>
              <div className="w-[20%]">
                <p className="font-semibold text-textSecondary-900 text-[15px]">
                  Fixed Capacity
                </p>
              </div>
              <div className="w-[20%]">
                <p className="font-semibold text-textSecondary-900 text-[15px]">
                  Float Capacity
                </p>
              </div>
              <div className="w-[20%] text-end">
                <p className="font-semibold text-textSecondary-900 text-[15px]">
                  Actions
                </p>
              </div>
            </div>

            {data.map((v, i) => (
              <div
                key={i}
                className="w-full flex items-center px-4 py-2 border-b border-b-paginationBg-900"
              >
                <div className="w-[20%]">
                  <p className="text-sm font-medium text-textSecondary-900">
                    {v.name}
                  </p>
                </div>
                <div className="w-[20%]">
                  <p className="text-sm font-medium text-textSecondary-900">
                    {v.fixedC}
                  </p>
                </div>
                <div className="w-[20%]">
                  <p className="text-sm font-medium text-textSecondary-900">
                    {v.floatC}
                  </p>
                </div>
                <div className="w-[20%]">
                  <p className="text-sm font-medium text-textSecondary-900">
                    {v.vendorType}
                  </p>
                </div>
                <div className="w-[20%] text-end">
                  <span className="text-textSecondary-900">
                    <i
                      className="fa-solid fa-trash text-xl cursor-pointer"
                      onClick={() => deleteBanquetes(i)}
                    ></i>
                  </span>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      {openPopup && (
        <div className="w-screen h-screen bg-black bg-opacity-70 fixed top-0 right-0 flex justify-center items-center">
          <div className="flex items-start gap-2">
            <div className="min-w-[400px] h-max bg-white text-black px-6 py-4 rounded-md">
              <div className="flex justify-center mb-4">
                <img
                  src="https://www.svgrepo.com/show/16895/wedding-cake.svg"
                  alt=""
                  className="w-16"
                />
              </div>
              {/* Heading */}
              <h2 className="text-textSecondary-900 text-xl font-semibold text-center">
                Add New Banquet
              </h2>

              <div className="mt-6">
                <form onSubmit={formSubmitted}>
                  {/* Name Input */}
                  <div className="mb-2">
                    <input
                      value={value.name}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          name: e.target.value,
                        })
                      }
                      type="text"
                      required
                      placeholder="Name*"
                      maxLength={15}
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-[13px] font-medium text-textSecondary-900"
                    />
                  </div>

                  {/* Fixed Capacity Input */}
                  <div className="mb-2">
                    <input
                      value={value.fixedC}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          fixedC: e.target.value,
                        })
                      }
                      type="number"
                      required
                      placeholder="Fixed Capacity*"
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-[13px] font-medium text-textSecondary-900"
                    />
                  </div>

                  {/* Floating Capacity Input */}
                  <div className="mb-2">
                    <input
                      value={value.floatC}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          floatC: e.target.value,
                        })
                      }
                      type="number"
                      required
                      placeholder="Floating Capacity*"
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-[13px] font-medium text-textSecondary-900"
                    />
                  </div>

                  {/* Banquets Type */}
                  <div className="mb-6">
                    <select
                      value={value.vendorType}
                      onChange={(e) =>
                        setValue({
                          ...value,
                          vendorType: e.target.value,
                        })
                      }
                      required
                      className="w-full outline-none border-b border-b-paginationBg-900 focus:border-b-textPrimary-900 pb-2 text-[13px] font-medium text-textSecondary-900 bg-transparent"
                    >
                      <option>Select Banquete</option>
                      <option value="indoor">Indoor</option>
                      <option value="Outdoor">Outdoor</option>
                      <option value="Indoor & Outdoor">Indoor & Outdoor</option>
                      <option value="Poolside">Poolside</option>
                      <option value="Terrace">Terrace</option>
                    </select>
                  </div>
                  {/* Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-textPrimary-900 text-white py-3 text-sm font-semibold"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Close Icon */}
            <div className="-mt-2">
              <i
                className="fa-solid fa-xmark text-3xl text-white cursor-pointer"
                onClick={() => setOpenPopup(!openPopup)}
              ></i>
            </div>
          </div>
        </div>
      )}

      {/* Delete Popup Modal */}
      {deletedPopup && (
        <div className="w-screen py-1 bg-green-600 text-white absolute top-0 right-0 text-center">
          <span className="text-sm font-semibold">
            Banquet Has been Deleted!
          </span>
        </div>
      )}
    </div>
  );
};

export default Banquets;
