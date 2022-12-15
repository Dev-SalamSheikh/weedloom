import React from "react";
import AnalyticsChart from "./AnalyticsChart";

const MonthlyAnalytics = () => {
  const data = [
    {
      name: "Dec 1 - 7",
      leads: 2000,
      views: 9800,
      amt: 2290,
    },
    {
      name: "Dec 8 - 15",
      leads: 3000,
      views: 1398,
      amt: 2210,
    },
    {
      name: "Dec 16 - 23",
      leads: 2000,
      views: 9800,
      amt: 2290,
    },
    {
      name: "Dec 24 - 30",
      leads: 2780,
      views: 3908,
      amt: 2000,
    },
  ];
  return (
    <div className="w-full h-full pb-10">
      {/* Chart */}
      <div className="my-4 w-full h-full max-h-[300px]">
        <AnalyticsChart data={data} />
      </div>

      {/* Lead box */}
      <div className="mb-4 lg:mt-10 mt-2 lg:px-6 px-2">
        {/* Heading */}
        <span className="text-textSecondary-900 lg:text-base text-sm">
          Dec Statistics ( Photographers - Lahore )
        </span>
        {/* LeadBox */}
        <div className="mt-2 mb-4 flex justify-between">
          {/* Highest Lead */}
          <div className="w-full border border-paginationBg-900 text-center py-2 text-[#27AE5F]">
            <span className="text-xs lg:text-sm font-semibold">
              Highest Lead
            </span>
            <h2 className="text-xl lg:text-3xl lg:my-8 my-3">46</h2>
          </div>
          {/* Average Lead */}
          <div className="w-full border border-x-0 border-paginationBg-900 text-center py-2 text-[#F5A623]">
            <span className="text-xs lg:text-sm font-semibold">
              Average Lead
            </span>
            <h2 className="text-xl lg:text-3xl lg:my-8 my-3">16</h2>
          </div>
          {/* Your Lead */}
          <div className="w-full border border-paginationBg-900 text-center py-2 text-red-600">
            <span className="text-xs lg:text-sm font-semibold">Lower Lead</span>
            <h2 className="text-xl lg:text-3xl lg:my-8 my-3">8</h2>
          </div>
        </div>

        {/* Love Count Box */}
        <span className="text-textSecondary-900 lg:text-base text-sm">
          Page View & Love Counts
        </span>
        {/* LeadBox */}
        <div className="mt-2 flex justify-between text-textSecondary-900">
          {/* Highest Lead */}
          <div className="w-full border border-paginationBg-900 text-center py-3">
            <h2 className="text-xl lg:text-3xl">0</h2>
            <span className="text-xs lg:text-sm">Your Lead</span>
          </div>
          {/* Average Lead */}
          <div className="w-full border border-x-0 border-paginationBg-900 text-center py-3">
            <h2 className="text-xl lg:text-3xl">0</h2>
            <span className="text-xs lg:text-sm">Love Count</span>
          </div>
          {/* Your Lead */}
          <div className="w-full border border-paginationBg-900 text-center py-3">
            <h2 className="text-xl lg:text-3xl">2,750</h2>
            <span className="text-xs lg:text-sm">Page Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyAnalytics;
