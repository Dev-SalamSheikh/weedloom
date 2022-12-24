import Icon from "./messageIcon.png";

const GetBackMsg = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center border-b border-b-paginationBg-900">
      <img src={Icon} alt="" className="w-44" />
      <h1 className="text-textSecondary-900 text-2xl font-bold py-2">
        Pick up where you left off
      </h1>
      <p className="text-gray-500 text-[15px]">
        Select a conversation and chat away.
      </p>
    </div>
  );
};

export default GetBackMsg;
