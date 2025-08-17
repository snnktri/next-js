'use client'

import React, {useState} from "react";
interface Props {
  content: string;
}

const AboutText: React.FC<Props> = ({ content }) => {
  const [isShowText, setIsShowText] = useState<boolean>(false);

  const handleClick = () => {
    setIsShowText((prev) => !prev);
  }

  // for long text handle

  const charaterLimit = 150;
  const isLongText = content.length > charaterLimit;

  const contentToShow = isShowText || !isLongText
                  ? content
                  : content.slice(0, 150) + "...."
  return (
    <div>
      <p className="text-sm text-gray-500">
       {contentToShow}
       <button className="text-[14px] font-medium text-justify leading-[22px] cursor-pointer"
       onClick={handleClick}>
        {
          isShowText ? 
          "show more" :
          "show less"
        }
       </button>
      </p>
    </div>
  );
};

export default AboutText;
