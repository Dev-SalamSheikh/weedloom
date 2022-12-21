import { useState } from "react";

const UserChecklists = () => {
  // Data
  const data = [
    { id: 1, task: "Rate Your Vendor", completed: true },
    { id: 2, task: "Submit a review", completed: false },
    { id: 3, task: "Share our website to your friend", completed: false },
    { id: 4, task: "Share Weedloom to social media", completed: true },
    { id: 5, task: "Rate Your Vendor 2", completed: true },
    { id: 6, task: "Submit a review 2", completed: false },
    { id: 7, task: "Share our website to your friend 2", completed: false },
    { id: 8, task: "Share Weedloom to social media 2", completed: true },
  ];

  // States
  const [completed, setCompleted] = useState(false);

  return (
    <div className="w-full h-full">
      {/* Heading */}
      <div className="p-4 border-b border-b-paginationBg-900">
        <h2 className="text-base tracking-widest text-textSecondary-900 leading-none">
          Checklists
        </h2>
      </div>

      {/* Incomplete Task */}
      <div className="w-full h-full p-4 pb-0">
        {/* Incompleted Task */}
        <div className="border-b border-b-paginationBg-900 mb-2 flex items-start justify-between cursor-pointer">
          <h2 className="text-sm text-textSecondary-900 leading-none pb-3 px-2">
            Incomplete
          </h2>
          <i className="fa-solid fa-chevron-down text-textSecondary-900 text-sm"></i>
        </div>

        <div>
          {/* Heading */}
          {data
            .filter((data) => {
              return !data.completed;
            })
            .map((item, i) => (
              <div key={i} className="flex gap-2 mb-1 cursor-pointer">
                <input
                  type="checkbox"
                  id={item.id}
                  className="accent-pink-500"
                />
                <label
                  htmlFor={item.id}
                  className="text-textSecondary-900 font-medium text-[13px]  cursor-pointer"
                >
                  {item.task}
                </label>
              </div>
            ))}
        </div>
      </div>

      {/* complete Task */}
      <div className="w-full h-full p-4 mt-6">
        {/* Incompleted Task */}
        <div
          className="border-b border-b-paginationBg-900 mb-2 flex items-start justify-between cursor-pointer"
          onClick={() => setCompleted(!completed)}
        >
          <h2 className="text-sm text-textSecondary-900 leading-none pb-3 px-2">
            Completed
          </h2>
          <i className="fa-solid fa-chevron-down text-textSecondary-900 text-sm"></i>
        </div>

        {completed && (
          <div>
            {/* Heading */}
            {data
              .filter((data) => {
                return data.completed;
              })
              .map((item, i) => (
                <div key={i} className="flex gap-2 mb-1 cursor-pointer">
                  <input
                    id={item.id}
                    type="checkbox"
                    className="accent-pink-500"
                    checked
                  />
                  <label
                    htmlFor={item.id}
                    className="text-textSecondary-900 font-medium text-[13px] cursor-pointer"
                  >
                    {item.task}
                  </label>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserChecklists;
