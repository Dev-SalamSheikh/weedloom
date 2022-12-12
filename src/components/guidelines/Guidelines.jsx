import Navbar from "../navbar/Navbar";
import TopNav from "../top nav/TopNav";
import Horizontal from "./photo_horizontal.webp";
import Vertical from "./photo_vertical.webp";

const Guidelines = () => {
  return (
    <div className="min-h-screen w-full bg-sectionBg-900">
      <TopNav />
      <Navbar />
      {/* Content */}
      <div className="px-[50px] py-4">
        {/* Heading */}
        <div>
          <span className="text-textSecondary-900 font-semibold">
            Photo Guidelines
          </span>
          <p className="text-textSecondary-900 text-sm my-2">
            As “pictures speak louder than words”, we request you to please
            follow these guidelines when you are uploading images to your
            profile:
          </p>
        </div>

        {/* Don't */}
        <div className="mt-4">
          <h5 className="text-textSecondary-900 font-semibold">Don't</h5>
          {/* Dont Content */}
          <div className="pl-8 my-2 flex flex-col gap-4">
            <li className="text-textSecondary-900 text-sm font-medium">
              Do not upload Vertical Images. All photos should be in a
              horizontal form.
            </li>
            {/* Images */}
            <div className="flex gap-8">
              <img src={Horizontal} alt="" className="w-64 max-h-64" />
              <img src={Vertical} alt="" className="w-64 h-72" />
            </div>

            <li className="text-textSecondary-900 text-sm font-medium">
              Do not upload selfies.
            </li>

            <li className="text-textSecondary-900 text-sm font-medium">
              Do not upload personal photos.
            </li>

            <li className="text-textSecondary-900 text-sm font-medium">
              Do not upload photos of your clients without their consent.
            </li>
          </div>
        </div>

        {/* Do's */}
        <div className="mt-8">
          <h5 className="text-textSecondary-900 font-semibold">Do's</h5>
          {/* Dont Content */}
          <div className="pl-8 my-2 flex flex-col gap-4">
            <li className="text-textSecondary-900 text-sm font-medium">
              Only upload images that are related to your work/industry.
            </li>

            <li className="text-textSecondary-900 text-sm font-medium">
              Upload only your original work.
            </li>

            <li className="text-textSecondary-900 text-sm font-medium">
              Upload images with a minimum width of 400 pixels & max. size of
              16MB.
            </li>

            <li className="text-textSecondary-900 text-sm font-medium">
              For unpaid folks: There is a 150 image limit per album. For paid
              folks: There is a 1000 image limit per album. 40 images can be
              uploaded at a time in an album
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
