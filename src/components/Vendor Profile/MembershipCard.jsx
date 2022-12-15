import Popular from "../../assets/popular.svg";

const YearlyMembershipCard = ({ amount, amount2, amount3, plans }) => {
  const premiumPackData = [
    "Visable below Popular Section",
    "Visible on first page",
    "No profile management support",
    "Unlimited photo uploads",
    "Email support",
    "Can reply to reviews",
    "Two reviews can be chosen to be pinned to top",
    "Analytics access",
    "No Profile mgt",
    "Visible contact details of customers who call you",
    "Can be listed in multiple cities (Additional Charges apply)",
    "Lead Updates Via SMS",
  ];

  const popularPackData = [
    "Visible below Handpicked section",
    "Visible on first page",
    "Dedicated profile management support",
    "Unlimited photo uploads",
    "Call support",
    "Can reply to reviews",
    "Two reviews can be chosen to be pinned to top",
    "Analytics access",
    "Request for Profile mgt",
    "Visible contact details of customers who call you",
    "Can be listed in multiple cities (Additional Charges apply)",
    "Lead Updates Via SMS",
  ];

  const handpickedPackData = [
    "Top Most Visibility - Membership on invite only",
    "Visible on first page",
    "Dedicated profile management support",
    "Unlimited photo uploads",
    "Call support",
    "Can reply to reviews",
    "Two reviews can be chosen to be pinned to top",
    "Analytics access",
    "Request for Profile mgt",
    "Visible contact details of customers who call you",
    "Can be listed in multiple cities (Additional Charges apply)",
    "Lead Updates Via SMS",
  ];
  return (
    <div className="p-4 flex flex-wrap lg:flex-nowrap justify-between gap-4">
      {/* Premium Card */}
      <div className="w-full lg:w-4/12 shadow-lg lg:mt-[50px] border-t border-t-slate-100">
        {/* Header Part */}
        <div className="pt-4 pb-10 px-4 text-center">
          <h1 className="text-lg lg:text-xl text-textSecondary-900 font-semibold">
            Premium
          </h1>
          <p className="text-textSecondary-900 text-xs lg:text-sm mt-2 mb-4">
            PKR. {amount} / {plans} +18% taxes extra
          </p>
          <button className="bg-[#F5A623] py-3 font-semibold text-white px-8 rounded-md text-xs lg:text-sm">
            Select
          </button>
        </div>

        {/* Body */}
        <div>
          {premiumPackData.map((data, i) => (
            <div key={i} className="border-t py-8 px-4 text-center">
              <span className="text-xs lg:text-sm text-textSecondary-900">
                {data}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Card */}
      <div className="w-full lg:w-4/12 shadow-lg">
        <div>
          <img src={Popular} alt="" />
        </div>
        {/* Header Part */}
        <div className="px-4 text-center pb-[42px]">
          <h1 className="text-lg lg:text-xl text-textSecondary-900 font-semibold">
            Popular
          </h1>
          <p className="text-textSecondary-900 text-xs lg:text-sm mt-2 mb-4">
            PKR. {amount2} / {plans} +18% taxes extra
          </p>
          <button className="bg-[#27AE5F] py-3 font-semibold text-white px-8 rounded-md text-xs lg:text-sm">
            Request
          </button>
        </div>

        {/* Body */}
        <div>
          {popularPackData.map((data, i) => (
            <div key={i} className="border-t py-8 px-4 text-center">
              <span className="text-xs lg:text-sm text-textSecondary-900">
                {data}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Card */}
      <div className="w-full lg:w-4/12 shadow-lg lg:mt-[45px] border-t border-t-slate-100">
        {/* Header Part */}
        <div className="py-4 px-4 text-center">
          <h1 className="text-lg lg:text-xl text-textSecondary-900 font-semibold">
            Handpicked
          </h1>
          <p className="text-textSecondary-900 text-xs lg:text-sm mt-2 mb-4">
            PKR. {amount3} / {plans} +18% taxes extra
          </p>
          <button className="bg-textPrimary-900 py-3 font-semibold text-white px-8 rounded-md text-xs lg:text-sm">
            Request
          </button>

          <p className="text-xs lg:text-sm text-textBlack-900 mt-2">
            *By invite only
          </p>
        </div>

        {/* Body */}
        <div>
          {handpickedPackData.map((data, i) => (
            <div key={i} className="border-t py-8 px-4 text-center">
              <span className="text-xs lg:text-sm text-textSecondary-900">
                {data}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YearlyMembershipCard;
