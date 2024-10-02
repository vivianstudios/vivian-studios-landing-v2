import React from "react";

export type IMessageProps = {
  title: string;
  content: string;
  alignment: "left" | "right";
};

const Message: React.FC<IMessageProps> = ({ title, content, alignment }) => {
  return (
    <div className="w-screen h-screen bg-black flex sm:flex-row flex-col p-[14%] text-white items-center justify-center relative z-30">
      <div className="sm:w-[40%] text-4xl sm:text-6xl font-averta font-extrabold">
        {title}
      </div>
      <div className="sm:w-[60%] text-xl flex items-end sm:text-2xl font-averta">
        {content}
      </div>
    </div>
  );
};
export default Message;
