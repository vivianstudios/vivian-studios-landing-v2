import React from "react";

type MissionProps = {
  content: string;
};

const Mission: React.FC<MissionProps> = ({ content }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center font-averta text-bold text-xl bg-black text-white p-2 sm:p-10">
      {content}
    </div>
  );
};
export default Mission;
