import React from "react";

type Props = {
  text: string;
};

const HeaderBetweenLines = ({ text }: Props) => {
  return (
    <div className="flex items-center">
      <div className="w-full h-[1px] bg-grayLighter"></div>
      <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
        {text}
      </h2>
      <div className="w-full h-[1px] bg-grayLighter"></div>
    </div>
  );
};

export default HeaderBetweenLines;
