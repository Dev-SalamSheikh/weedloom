import { topCities } from "../../CityList";
import { useState } from "react";

const InformationContent = () => {
  const [formData, setFormData] = useState({
    name: "Junaid Asghar",
    personName: "",
    additionalMail: "",
    contactNumber: "",
    numberType: "",
    website: "",
    facebook: "",
    instagram: "",
    youtube: "",
    city: "",
    address: "",
  });

  const [numberBox, setNumberBox] = useState([{ number: "9566423200" }]);

  // Add Dynamic Number Boxes
  const addNumberBox = () => {
    setNumberBox([...numberBox, { number: "" }]);
  };

  // Remove Input Field Function
  const removeNumberBox = (index) => {
    const list = [...numberBox];
    list.splice(index, 1);
    setNumberBox(list);
  };

  // Handle Number Box Values
  const handleNumberChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...numberBox];
    list[index][name] = value;
    setNumberBox(list);
  };

  return (
    <div className="w-full">
      {/* ProgressBar of Profile Completation */}
      <div className="h-full w-full px-2 lg:px-6 my-4">
        {/* Heading */}
        <span className="text-textSecondary-900">Profile Completation</span>
        <div class="bg-white overflow-hidden p-[6px] shadow-md border border-textPrimary-900 rounded-[4px] mt-2">
          <div class="relative h-7 flex items-center justify-center">
            <div class="absolute top-0 bottom-0 left-0 w-[10%] bg-textPrimary-900"></div>
            <div class="relative text-textSecondary-900 font-medium text-sm">
              10% COMPLETE
            </div>
          </div>
        </div>

        {/* Complete Profile Steps */}
        <div className="border border-paginationBg-900 mt-6 pt-4 px-4 pb-6 rounded-md">
          <h2 className="lg:text-lg text-textSecondary-900 font-medium">
            Complete your profile by:{" "}
          </h2>

          {/* STeps */}
          <div className="flex flex-col gap-2 mt-2 lg:pl-10 pl-4">
            <span className="text-[13px] text-textSecondary-900">
              Answering your FAQs
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Linking your profile to your Facebook page/ website
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Adding images to your portfolio
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Get featured in a Real Wedding. Email your work to
              submissions@wedmegood.com
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Upload your first album to get visibility on our inspiration
              gallery and social media handles
            </span>
            <span className="text-[13px] text-textSecondary-900">
              Invite clients to review your work
            </span>
          </div>
        </div>
      </div>
      {/* Form Content */}
      <div className="">
        <form>
          {/* Heading */}
          <div className="bg-sectionBg-900 px-2 py-3">
            <h2 className="text-textSecondary-900 lg:text-lg">
              Personal Information
            </h2>
          </div>
          {/* Additional Input Fields */}
          <div className="additional_inputs w-full py-6 lg:px-8 px-2">
            {/* First Fields */}
            <div className="w-full">
              {/* Login ID */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="loginid"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Login email ID
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="loginid"
                    type="text"
                    placeholder="User@gmail.com"
                    disabled
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Brand Name*  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="brand"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Brand Name*
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="brand"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Category Name*  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="category"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Category Name*
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="category"
                    type="text"
                    placeholder="Photographer"
                    disabled
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Contact person name *  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="contactname"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Contact person name{" "}
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="contactname"
                    type="text"
                    placeholder=""
                    value={formData.personName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        personName: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Additional email ID   */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="additionalmail"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Additional email ID
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border py-1 lg:px-4 px-2">
                  <input
                    id="additionalmail"
                    type="email"
                    placeholder=""
                    value={formData.additionalMail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        additionalMail: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Contact Number   */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="contactnumber"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Contact number*
                  </label>
                </div>

                <div className="lg:w-8/12 w-full">
                  {/* Main Div */}
                  <div className="w-full flex lg:flex-nowrap flex-wrap justify-between items-start">
                    <div className="w-full lg:w-10/12">
                      {/* Input Field */}
                      {numberBox.map((singleNumberBox, i) => (
                        <div
                          key={i}
                          className="w-full flex justify-between items-center gap-3 mb-2 lg:mb-0"
                        >
                          <div className="w-full flex lg:flex-nowrap flex-wrap border border-t-0">
                            {/* Country */}
                            <div className="bg-[#efefef] w-full lg:w-2/12 flex justify-center items-center">
                              <span className="text-xs py-1">Pak(+92)</span>
                            </div>

                            {/* Number */}
                            <div className="w-full lg:w-5/12 flex items-center">
                              <input
                                name="number"
                                id="number"
                                type="text"
                                value={singleNumberBox.number}
                                onChange={(e) => handleNumberChange(e, i)}
                                className="bg-transparent px-2 py-1 outline-none border-none text-textSecondary-900 text-[13px] font-semibold rounded-md"
                              />
                            </div>

                            {/* Select Box */}
                            <div className="w-full lg:w-5/12">
                              <select className="w-full px-4 py-2 bg-[#efefef] text-xs border-none outline-none">
                                <option value="mobile">Mobile</option>
                                <option value="landline">Landline</option>
                              </select>
                            </div>
                          </div>

                          {/* Close */}
                          {numberBox.length >= 2 && (
                            <span
                              className="text-textPrimary-900"
                              onClick={() => removeNumberBox(i)}
                            >
                              <i className="fa-regular fa-circle-xmark text-sm cursor-pointer"></i>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Clear and add more */}
                    <div className="w-max lg:w-2/12 flex justify-end px-2 mt-2">
                      {numberBox.length < 5 && (
                        <span
                          className="flex items-center text-xs text-textPrimary-900 font-semibold cursor-pointer"
                          onClick={addNumberBox}
                        >
                          <i className="fa-solid fa-circle-plus text-sm mr-2"></i>{" "}
                          ADD MORE
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Fields */}
            <div className="w-full mt-8">
              {/* Website link  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="websiteLink"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Website link
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="websiteLink"
                    type="text"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        website: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Facebook Url  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="facebook"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Facebook url
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="facebook"
                    type="text"
                    value={formData.facebook}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        facebook: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Insta*  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="instagram"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Instagram url
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="instagram"
                    type="text"
                    value={formData.instagram}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        instagram: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Yt & Vimeo *  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="ytLink"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Youtube/Vimeo url
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2">
                  <input
                    id="ytLink"
                    type="text"
                    placeholder=""
                    value={formData.youtube}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        youtube: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>

              {/* Additional Information  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="additionalInfo"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900 flex flex-col"
                  >
                    <span>Additional Information</span>
                    <span className="text-[10px]">
                      (To update your description, please send a mail to
                      vendors@weedloom.com)
                    </span>
                  </label>
                </div>
                <div className="mt-2 lg:mt-0 lg:w-8/12 border py-1 px-2 pr-0">
                  <textarea
                    disabled
                    id="additionalInfo"
                    rows="7"
                    maxLength={250}
                    className="w-full outline-none border-transparent text-xs resize-none"
                  ></textarea>
                </div>
              </div>

              {/* City *  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center mb-1 lg:mb-0">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="city"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    City*(Choose your base city here)
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border lg:border-b-0 py-1 lg:px-4 px-2 bg-[#efefef] ">
                  <select
                    id="city"
                    className="w-full bg-transparent outline-none text-textSecondary-900 text-xs lg:text-sm"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.target.value,
                      })
                    }
                  >
                    {topCities.map((city) => (
                      <option value={city.name} key={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Address  */}
              <div className="w-full flex flex-col md:flex-row justify-between lg:items-center">
                <div className="w-full lg:w-4/12">
                  <label
                    htmlFor="address"
                    className="text-xs lg:text-sm font-bold text-textSecondary-900"
                  >
                    Address
                  </label>
                </div>
                <div className="w-full lg:w-8/12 border py-1 lg:px-4 px-2">
                  <input
                    id="address"
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        address: e.target.value,
                      })
                    }
                    className="bg-transparent outline-none border-none text-textSecondary-900 lg:text-[13px] text-xs font-semibold rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details Heading*/}
          <div className="bg-sectionBg-900 px-2 py-3">
            <h2 className="text-textSecondary-900 lg:text-lg">
              Additional Details
            </h2>
          </div>

          {/* Additional Details Boxes */}
          <div className="w-full mt-2 mb-8 lg:px-8 px-2">
            {/* Booked Package */}
            <div className="border-b pt-4 pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                What is the value of your most booked package? (or your avg
                booking price Eg: 300,000){" "}
              </p>
              <input
                type="number"
                className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px]"
              />
            </div>

            {/* The above package includes services for how many days?  */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                The above package includes services for how many days?
              </p>

              {/* Radio Buttons */}
              <div className="mt-2 pl-4">
                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="one_day"
                    name="days"
                    value="1 Day"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="one_day"
                  >
                    1 Day
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="two_days"
                    name="days"
                    value="2 Days"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="two_days"
                  >
                    2 Days
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="three_days"
                    name="days"
                    value="3 Days"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="three_days"
                  >
                    3 Days
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="four_days"
                    name="days"
                    value="4 Days"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="four_days"
                  >
                    4 Days
                  </label>
                </div>
              </div>
            </div>

            {/* The above package includes which services?  */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                The above package includes which services?
              </p>

              {/* Radio Buttons */}
              <div className="mt-2 pl-4">
                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="photo"
                    name="category"
                    value="Photo"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="photo"
                  >
                    Photo
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="photovideo"
                    name="category"
                    value="Photo + Video"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="photovideo"
                  >
                    Photo + Video
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="photovideoprewedding"
                    name="category"
                    value="Photo + Video + Pre Wedding"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="photovideoprewedding"
                  >
                    Photo + Video + Pre Wedding
                  </label>
                </div>
              </div>
            </div>

            {/* Please describe your cancellation policy ( if a user initiates cancellation) including whether you provide refunds of booking amounts , and terms for doing so.   */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Please describe your cancellation policy ( if a user initiates
                cancellation) including whether you provide refunds of booking
                amounts , and terms for doing so.
              </p>

              {/* Radio Buttons */}
              <div className="mt-2 pl-4">
                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="partial"
                    name="cancellation"
                    value="Partial Refund Offered"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="partial"
                  >
                    Partial Refund Offered
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="norefund"
                    name="cancellation"
                    value="No Refund Offered "
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="norefund"
                  >
                    No Refund Offered
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="dateadjust"
                    name="cancellation"
                    value="No Refund Offered However Date Adjustment Can Be Done "
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="dateadjust"
                  >
                    No Refund Offered However Date Adjustment Can Be Done
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="fullrefund"
                    name="cancellation"
                    value="Full Refund Offered"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="fullrefund"
                  >
                    Full Refund Offered
                  </label>
                </div>
              </div>
            </div>

            {/* Please describe your cancellation policy (if you initiate a cancellation) including whether you provide refunds of booking amounts and terms for doing so.   */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Please describe your cancellation policy (if you initiate a
                cancellation) including whether you provide refunds of booking
                amounts and terms for doing so.
              </p>

              {/* Radio Buttons */}
              <div className="mt-2 pl-4">
                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="vendorpartial"
                    name="vendorcancel"
                    value="Partial Refund Offered"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="vendorpartial"
                  >
                    Partial Refund Offered
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="vendornorefund"
                    name="vendorcancel"
                    value="No Refund Offered "
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="vendornorefund"
                  >
                    No Refund Offered
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="vendorfullrefund"
                    name="vendorcancel"
                    value="Full Refund Offered"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="vendorfullrefund"
                  >
                    Full Refund Offered
                  </label>
                </div>
              </div>
            </div>

            {/* What are the terms & conditions of your cancellation policy? ( please describe in detail - eg No refunds within a month of the wedding day or 50% amount refundable)   */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                What are the terms & conditions of your cancellation policy? (
                please describe in detail - eg No refunds within a month of the
                wedding day or 50% amount refundable)
              </p>

              {/* TextArea */}
              <div className="mt-4">
                <textarea
                  rows="5"
                  className="text-xs lg:text-sm outline-none border lg:w-6/12 w-full px-2 py-1"
                ></textarea>
              </div>
            </div>

            {/* Please mention any awards you have received ?    */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Please mention any awards you have received ?
              </p>

              {/* TextArea */}
              <div className="mt-4">
                <textarea
                  rows="5"
                  className="text-xs lg:text-sm outline-none border lg:w-6/12 w-full px-2 py-1"
                ></textarea>
              </div>
            </div>

            {/* Describe your photography in three words (eg: fun, vibrant and natural)     */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Describe your photography in three words (eg: fun, vibrant and
                natural)
              </p>

              {/* TextArea */}
              <div className="mt-4">
                <textarea
                  rows="5"
                  className="text-xs lg:text-sm outline-none border lg:w-6/12 px-2 py-1 w-full"
                ></textarea>
              </div>
            </div>

            {/* How many cities have you covered weddings in till date?  */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                How many cities have you covered weddings in till date?
              </p>
              <input
                type="number"
                className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px]"
              />
            </div>

            {/* We love wedding photography because      */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                We love wedding photography because
              </p>

              {/* TextArea */}
              <div className="mt-4">
                <textarea
                  rows="5"
                  className="text-xs lg:text-sm outline-none border lg:w-6/12 px-2 py-1 w-full"
                ></textarea>
              </div>
            </div>

            {/* Price for covering a small event like an engagement or roka (Assume under 50 pax and 4 hours of shoot photo and video)   */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Price for covering a small event like an engagement or roka
                (Assume under 50 pax and 4 hours of shoot photo and video)
              </p>
              <input
                type="number"
                className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px]"
              />
            </div>

            {/* How many weeks in advance should a booking be made?    */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                How many weeks in advance should a booking be made?
              </p>
              <input
                type="number"
                className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px]"
              />
            </div>

            {/* Which Year you started shooting weddings?    */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Which Year you started shooting weddings?
              </p>
              <input
                type="number"
                className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px]"
              />
            </div>

            {/* How many weeks do you take to deliver the photos (Please respond such as 6 weeks, 7 weeks etc)     */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                How many weeks do you take to deliver the photos (Please respond
                such as 6 weeks, 7 weeks etc)
              </p>
              <input
                type="number"
                className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px]"
              />
            </div>

            {/* Which services do you offer?    */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Which services do you offer?
              </p>

              {/* Checkboxes */}
              <div className="mt-2 pl-4">
                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="Candid Photography"
                    checked={formData.candid}
                    value={formData.candid}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        candid: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Candid Photography"
                  >
                    Candid Photography
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="Wedding Films"
                    checked={formData.wedding}
                    value={formData.wedding}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        wedding: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Wedding Films"
                  >
                    Wedding Films
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="Traditional Photography"
                    checked={formData.traditional}
                    value={formData.traditional}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        traditional: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Traditional Photography"
                  >
                    Traditional Photography
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="Pre-Wedding Shoots"
                    checked={formData.prewedding}
                    value={formData.prewedding}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        prewedding: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Pre-Wedding Shoots"
                  >
                    Pre-Wedding Shoots
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="Albums"
                    checked={formData.album}
                    value={formData.album}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        album: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Albums"
                  >
                    Albums
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="Maternity Shoots"
                    checked={formData.maternity}
                    value={formData.maternity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        maternity: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Maternity Shoots"
                  >
                    Maternity Shoots
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="Fashion Shoots"
                    checked={formData.fashion}
                    value={formData.fashion}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fashion: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Fashion Shoots"
                  >
                    Fashion Shoots
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="Pre wedding Films"
                    checked={formData.preweddingflims}
                    value={formData.preweddingflims}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preweddingflims: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Pre wedding Films"
                  >
                    Pre wedding Films
                  </label>
                </div>

                <div className="mb-1">
                  <input
                    className="accent-textPrimary-900"
                    type="checkbox"
                    id="traditional"
                    checked={formData.videography}
                    value={formData.videography}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        videography: e.target.checked,
                      })
                    }
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="traditional"
                  >
                    Traditional Videography
                  </label>
                </div>
              </div>
            </div>

            {/* What is your speciality?    */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                What is your speciality?
              </p>

              {/* Radio Buttons */}
              <div className="mt-2 pl-4">
                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="Candid"
                    name="speciality"
                    value="Candid Specialist"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Candid"
                  >
                    Candid Specialist
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="traditioncandid"
                    name="speciality"
                    value="Traditional + Candid Specialist"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="traditioncandid"
                  >
                    Traditional + Candid Specialist
                  </label>
                </div>
              </div>
            </div>

            {/* How many processed (edited) pictures are delivered to the client?     */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                How many processed (edited) pictures are delivered to the
                client?
              </p>

              {/* Radio Buttons */}
              <div className="mt-2 pl-4">
                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="<300"
                    name="deliver"
                    value="<300"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="<300"
                  >
                    &#60;300
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="300-500"
                    name="deliver"
                    value="300-500"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="300-500"
                  >
                    300 - 500
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="500-700 "
                    name="deliver"
                    value="500-700 "
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="500-700 "
                  >
                    500-700
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id=">700"
                    name="deliver"
                    value=">700"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor=">700"
                  >
                    &#62;700
                  </label>
                </div>
              </div>
            </div>

            {/* What are your payment terms? */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                What are your payment terms?
              </p>

              {/* Radio Buttons */}
              <div className="mt-2 pl-4">
                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id=" Upto 25% Advance"
                    name="paymentterms"
                    value=" Upto 25% Advance"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor=" Upto 25% Advance"
                  >
                    Upto 25% Advance
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="Approx 50% Advance while booking"
                    name="paymentterms"
                    value="Approx 50% Advance while booking"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Approx 50% Advance while booking"
                  >
                    Approx 50% Advance while booking
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="100% Advance while booking"
                    name="paymentterms"
                    value="100% Advance while booking"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="100% Advance while booking"
                  >
                    100% Advance while booking
                  </label>
                </div>
              </div>
            </div>

            {/* Who bears cost of travel and lodging when travelling to a different city?  */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Who bears cost of travel and lodging when travelling to a
                different city?
              </p>

              {/* Radio Buttons */}
              <div className="mt-2 pl-4">
                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="Cost of Stay & Travel borne by Client"
                    name="costbears"
                    value="Cost of Stay & Travel borne by Client"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Cost of Stay & Travel borne by Client"
                  >
                    Cost of Stay & Travel borne by Client
                  </label>
                </div>

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="Cost of Stay borne by Client, Travel borne by Us"
                    name="costbears"
                    value="Cost of Stay borne by Client, Travel borne by Us"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="Cost of Stay borne by Client, Travel borne by Us"
                  >
                    Cost of Stay borne by Client, Travel borne by Us
                  </label>
                </div>
              </div>
            </div>

            {/* Candid Photography and Traditional Photography one day package for wedding day (Assume 300 pax)  */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Candid Photography and Traditional Photography one day package
                for wedding day (Assume 300 pax)
              </p>
              <div className="flex items-center gap-4 lg:gap-16">
                <input
                  type="number"
                  className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px] text-textSecondary-900"
                />

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="photodefault"
                    name="onedayvideography"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="photodefault"
                  >
                    Set as default
                  </label>
                </div>
              </div>
            </div>

            {/* Candid Photography, Traditional Photography and Cinematic Video one day package (Assume 300 pax wedding day)   */}
            <div className="border-b py-2 lg:pt-4 lg:pb-6">
              <p className="text-xs lg:text-sm font-bold text-textSecondary-900">
                Candid Photography, Traditional Photography and Cinematic Video
                one day package (Assume 300 pax wedding day)
              </p>
              <div className="flex items-center lg:gap-16 gap-4">
                <input
                  type="number"
                  className="border mt-2 outline-none text-xs lg:text-sm px-2 py-[2px] text-textSecondary-900"
                />

                <div>
                  <input
                    className="accent-textPrimary-900"
                    type="radio"
                    id="videodefault"
                    name="onedayvideography"
                  />
                  <label
                    className="pl-2 text-xs lg:text-sm text-textSecondary-900"
                    htmlFor="videodefault"
                  >
                    Set as default
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="w-full pb-8 px-8 text-end">
            <button
              type="submit"
              className="w-4/12 py-[6px] bg-textPrimary-900 text-[15px] text-white"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InformationContent;
