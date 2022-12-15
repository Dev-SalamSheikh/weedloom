import { useState } from "react";
import YearlyAnalytics from "./YearlyAnalytics";
import MonthlyAnalytics from "./MonthlyAnalytics";
import WeeklyAnalytics from "./WeeklyAnalytics";

const ProfileAnalytics = () => {
  const [yearly, setYearly] = useState(true);
  const [monthly, setMonthly] = useState(false);
  const [daily, setDaily] = useState(false);

  // Yearly Toggle Function
  const yearlyStatistics = () => {
    setYearly(true);
    setMonthly(false);
    setDaily(false);
  };

  // Monthly Toggle Function
  const monthlyStatistics = () => {
    setMonthly(true);
    setYearly(false);
    setDaily(false);
  };

  // Daily Toggle Function
  const weeklyStatistics = () => {
    setDaily(true);
    setMonthly(false);
    setYearly(false);
  };

  return (
    <div className="w-full h-full">
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
        <div className="flex items-center gap-4 mt-4 lg:mt-0">
          <button
            className={`border p-2 px-4 text-xs lg:text-sm rounded-sm ${
              daily ? "bg-textPrimary-900 text-white" : "text-textSecondary-900"
            }`}
            onClick={weeklyStatistics}
          >
            Weekly
          </button>
          <button
            className={`border p-2 px-4 text-xs lg:text-sm rounded-sm ${
              monthly
                ? "bg-textPrimary-900 text-white"
                : "text-textSecondary-900"
            }`}
            onClick={monthlyStatistics}
          >
            Monthly
          </button>
          <button
            className={`border p-2 px-4 text-xs lg:text-sm ${
              yearly
                ? "bg-textPrimary-900 text-white"
                : "text-textSecondary-900"
            }`}
            onClick={yearlyStatistics}
          >
            Yearly
          </button>
        </div>
      </div>

      {yearly && <YearlyAnalytics />}
      {monthly && <MonthlyAnalytics />}
      {daily && <WeeklyAnalytics />}
    </div>
  );
};

export default ProfileAnalytics;
