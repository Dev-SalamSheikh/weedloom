import { useState } from "react";
import MembershipCard from "./MembershipCard";

const MemberShip = () => {
  const [yearly, setYearly] = useState(true);
  const [monthly, setMonthly] = useState(false);

  // Yearly Toggle Function
  const yearlyMembership = () => {
    setYearly(true);
    setMonthly(false);
  };

  // Monthly Toggle Function
  const monthlyMembership = () => {
    setMonthly(true);
    setYearly(false);
  };

  return (
    <div>
      {/* Heading */}
      <div className="bg-sectionBg-900 px-2 py-3 flex flex-col lg:flex-row justify-between lg:items-center">
        <div>
          <h5 className="text-textSecondary-900 text-[14px] lg:text-[15px]">
            Membership Packages
          </h5>
          <p className="text-textSecondary-900 text-[11px] lg:text-[13px]">
            (To know more about how to increase your visibility on our platform,
            reach us on vendors@weedloom.com or +92-9080-581-008)
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-2 lg:mt-0">
          <button
            className={`border p-2 px-4 text-xs lg:text-sm rounded-sm ${
              monthly
                ? "bg-textPrimary-900 text-white"
                : "text-textSecondary-900"
            }`}
            onClick={monthlyMembership}
          >
            Monthly
          </button>
          <button
            className={`border p-2 px-4 text-xs lg:text-sm ${
              yearly
                ? "bg-textPrimary-900 text-white"
                : "text-textSecondary-900"
            }`}
            onClick={yearlyMembership}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Yearly Card Content */}
      {yearly && (
        <MembershipCard
          amount="52,325"
          amount2="1,02,802"
          amount3="1,94,051"
          plans="Yearly"
        />
      )}

      {monthly && (
        <MembershipCard
          amount="4300"
          amount2="8,500"
          amount3="16,170"
          plans="Monthly"
        />
      )}
    </div>
  );
};

export default MemberShip;
