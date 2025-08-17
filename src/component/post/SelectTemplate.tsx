import React from "react";
import type { EditorType } from "@/type/resources/postContent.type";
interface Props {
  selectEditor?: (editor: EditorType) => void;
}

const SelectTemplate: React.FC<Props> = ({ selectEditor }) => {
  return (
    <div className="px-4">
      <div className="space-y-2 text-start">
        <h2 className="text-[#333333] font-medium text-[14px]">
          Choose template to get started.
        </h2>
        <p className="flex gap-2 items-center">
          <span className="text-[#333333] font-medium px-2 py-1 rounded-2xl bg-[#f3f4f7]">
            Hiring
          </span>
          <span className="text-[#333333] font-medium px-2 py-1 rounded-2xl bg-[#f3f4f7]">
            Urgent
          </span>
          <span className="text-[#333333] font-medium px-2 py-1 rounded-2xl bg-[#f3f4f7]">
            Update
          </span>
        </p>
      </div>
      {/* select template */}
      <div className="flex justify-between my-4 px-4">
        <div
          className="border-1 border[#dfdfdf] pt-4 px-4 rounded-md flex gap-x-2
        w-[190px] h-[116px] cursor-pointer"
          onClick={()=>selectEditor?.('Opening')}
        >
          <div className="h-4 w-8 rounded-sm bg-blue-200 flex justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.4 0.802246C8.95695 0.802246 9.4911 1.03271 9.88492 1.44295C10.2788 1.85319 10.5 2.40958 10.5 2.98975H12.6C12.9713 2.98975 13.3274 3.14339 13.5899 3.41688C13.8525 3.69037 14 4.06131 14 4.44808V11.7397C14 12.1265 13.8525 12.4975 13.5899 12.7709C13.3274 13.0444 12.9713 13.1981 12.6 13.1981H1.4C1.0287 13.1981 0.672601 13.0444 0.41005 12.7709C0.1475 12.4975 0 12.1265 0 11.7397V4.44808C0 4.06131 0.1475 3.69037 0.41005 3.41688C0.672601 3.14339 1.0287 2.98975 1.4 2.98975H3.5C3.5 2.40958 3.72125 1.85319 4.11508 1.44295C4.5089 1.03271 5.04305 0.802246 5.6 0.802246H8.4ZM4.2 3.71891C4.02855 3.71894 3.86306 3.78451 3.73494 3.90318C3.60682 4.02186 3.52496 4.1854 3.5049 4.36277L3.5 4.44808V11.7397C3.5002 11.9256 3.56852 12.1044 3.69099 12.2395C3.81347 12.3746 3.98087 12.456 4.15898 12.4668C4.33709 12.4777 4.51247 12.4174 4.64928 12.2981C4.7861 12.1788 4.87403 12.0096 4.8951 11.8251L4.9 11.7397V4.44808C4.9 4.25469 4.82625 4.06923 4.69497 3.93248C4.5637 3.79574 4.38565 3.71891 4.2 3.71891ZM9.8 3.71891C9.61435 3.71891 9.4363 3.79574 9.30503 3.93248C9.17375 4.06923 9.1 4.25469 9.1 4.44808V11.7397C9.1 11.9331 9.17375 12.1186 9.30503 12.2553C9.4363 12.3921 9.61435 12.4689 9.8 12.4689C9.98565 12.4689 10.1637 12.3921 10.295 12.2553C10.4263 12.1186 10.5 11.9331 10.5 11.7397V4.44808C10.5 4.25469 10.4263 4.06923 10.295 3.93248C10.1637 3.79574 9.98565 3.71891 9.8 3.71891ZM8.4 2.26058H5.6C5.42855 2.2606 5.26306 2.32617 5.13494 2.44485C5.00681 2.56353 4.92496 2.72706 4.9049 2.90443L4.9 2.98975H9.1C9.09998 2.81115 9.03703 2.63877 8.9231 2.50531C8.80917 2.37185 8.65217 2.28658 8.4819 2.26568L8.4 2.26058Z"
                fill="#0070EF"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <h2 className="text-[#11111] font-medium text-[12px]">
              Job Opening
            </h2>
            <p className="text-[#333333] text-wrap text-[10px]">
              Announce a new position at an institution
            </p>
            <p className="bg-blue-100 text-[10px] text-[#333333] rounded-2xl px-2 w-fit">
              Hiring
            </p>
          </div>
        </div>
        <div
          className="border-1 border[#dfdfdf] pt-4 px-4 rounded-md flex gap-x-2
        w-[190px] h-[116px] cursor-pointer"
          onClick={()=>selectEditor?.('Urgent')}
        >
          <div className="h-4 w-8 rounded-sm bg-blue-200 flex justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.88889 11.4412V8.38235C4.88889 7.5711 5.21667 6.79308 5.80011 6.21944C6.38356 5.6458 7.17488 5.32353 8 5.32353C8.82512 5.32353 9.61644 5.6458 10.1999 6.21944C10.7833 6.79308 11.1111 7.5711 11.1111 8.38235V11.4412M1 8.38235H1.77778M8 1.5V2.26471M14.2222 8.38235H15M3.02222 3.48824L3.56667 4.02353M12.9778 3.48824L12.4333 4.02353M3.33333 12.2059C3.33333 12.0031 3.41528 11.8086 3.56114 11.6652C3.707 11.5217 3.90483 11.4412 4.11111 11.4412H11.8889C12.0952 11.4412 12.293 11.5217 12.4389 11.6652C12.5847 11.8086 12.6667 12.0031 12.6667 12.2059V13.7353C12.6667 13.9381 12.5847 14.1326 12.4389 14.276C12.293 14.4194 12.0952 14.5 11.8889 14.5H4.11111C3.90483 14.5 3.707 14.4194 3.56114 14.276C3.41528 14.1326 3.33333 13.9381 3.33333 13.7353V12.2059Z"
                stroke="#0070EF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <h2 className="text-[#11111] font-medium text-[12px]">
              Urgent hiring
            </h2>
            <p className="text-[#333333] text-wrap text-[10px]">
              Quick hiring for immediate needs
            </p>
            <p className="bg-blue-100 text-[10px] text-[#333333] rounded-2xl px-2 w-fit">
              Urgent
            </p>
          </div>
        </div>
        <div
          className="border-1 border[#dfdfdf] pt-4 px-4 rounded-md flex gap-x-2
        w-[190px] h-[116px] cursor-pointer"
          onClick={()=>selectEditor?.('Field_insight')}
        >
          <div className="h-4 w-8 rounded-sm bg-blue-200 flex justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.5C7.19833 10.5 7.3647 10.4328 7.4991 10.2984C7.6335 10.164 7.70046 9.99786 7.7 9.8V7C7.7 6.80166 7.6328 6.63553 7.4984 6.5016C7.364 6.36766 7.19786 6.30047 7 6.3C6.80213 6.29953 6.636 6.36673 6.5016 6.5016C6.3672 6.63647 6.3 6.8026 6.3 7V9.8C6.3 9.99833 6.3672 10.1647 6.5016 10.2991C6.636 10.4335 6.80213 10.5005 7 10.5ZM7 4.9C7.19833 4.9 7.3647 4.8328 7.4991 4.6984C7.6335 4.564 7.70046 4.39787 7.7 4.2C7.69953 4.00213 7.63233 3.836 7.4984 3.7016C7.36446 3.5672 7.19833 3.5 7 3.5C6.80166 3.5 6.63553 3.5672 6.5016 3.7016C6.36766 3.836 6.30046 4.00213 6.3 4.2C6.29953 4.39787 6.36673 4.56423 6.5016 4.6991C6.63646 4.83397 6.8026 4.90093 7 4.9ZM7 14C6.03166 14 5.12166 13.8161 4.27 13.4484C3.41833 13.0807 2.6775 12.582 2.0475 11.9525C1.4175 11.323 0.918867 10.5821 0.551601 9.73C0.184334 8.87786 0.000467552 7.96786 8.86075e-07 7C-0.00046578 6.03213 0.183401 5.12213 0.551601 4.27C0.9198 3.41787 1.41843 2.67703 2.0475 2.0475C2.67657 1.41797 3.4174 0.919333 4.27 0.5516C5.1226 0.183867 6.0326 0 7 0C7.9674 0 8.87739 0.183867 9.72999 0.5516C10.5826 0.919333 11.3234 1.41797 11.9525 2.0475C12.5816 2.67703 13.0804 3.41787 13.4491 4.27C13.8178 5.12213 14.0014 6.03213 14 7C13.9986 7.96786 13.8147 8.87786 13.4484 9.73C13.0821 10.5821 12.5834 11.323 11.9525 11.9525C11.3216 12.582 10.5807 13.0809 9.72999 13.4491C8.87926 13.8173 7.96926 14.0009 7 14ZM7 12.6C8.56333 12.6 9.88749 12.0575 10.9725 10.9725C12.0575 9.8875 12.6 8.56333 12.6 7C12.6 5.43667 12.0575 4.1125 10.9725 3.0275C9.88749 1.9425 8.56333 1.4 7 1.4C5.43666 1.4 4.1125 1.9425 3.0275 3.0275C1.9425 4.1125 1.4 5.43667 1.4 7C1.4 8.56333 1.9425 9.8875 3.0275 10.9725C4.1125 12.0575 5.43666 12.6 7 12.6Z"
                fill="#0070EF"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <h2 className="text-[#11111] font-medium text-[12px]">
              Field Insight
            </h2>
            <p className="text-[#333333] text-wrap text-[10px]">
              Post other career-specific updates
            </p>
            <p className="bg-blue-100 text-[10px] text-[#333333] rounded-2xl px-2 w-fit">
              Updates
            </p>
          </div>
        </div>
      </div>
      {/* create from scratch */}
      <div
        className="p-4 rounded-lg border-1 border-[#dfdfdf]
       flex flex-col items-center justify-center gap-y-4"
      >
        <div className="flex items-center flex-col">
          <h2 className="flex text-[#111111] text-[14px] font-medium text-center">
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.12253 18.8792L3.12251 4.87955C3.12242 4.61685 3.17408 4.35671 3.27455 4.11398C3.37501 3.87125 3.52232 3.65069 3.70804 3.4649C3.89376 3.27912 4.11427 3.13173 4.35696 3.03118C4.59965 2.93063 4.85978 2.87887 5.12247 2.87887L17.123 2.88001C17.6534 2.88009 18.162 3.09086 18.5371 3.46596C18.9121 3.84105 19.1227 4.34975 19.1227 4.88016L19.1227 18.8798C19.1228 19.1425 19.0711 19.4027 18.9707 19.6454C18.8702 19.8881 18.7229 20.1087 18.5372 20.2945C18.3515 20.4803 18.1309 20.6277 17.8883 20.7282C17.6456 20.8288 17.3854 20.8805 17.1227 20.8805L5.12223 20.8794C4.59182 20.8793 4.08317 20.6685 3.70816 20.2934C3.33314 19.9183 3.12249 19.4096 3.12253 18.8792Z"
                stroke="#111111"
                strokeWidth="1.5"
              />
              <path
                d="M7.12254 6.87941L15.123 6.87913M7.1221 10.8793L15.1228 10.88M7.12264 14.8789L12.1227 14.8797"
                stroke="#111111"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Start from scratch
          </h2>
          <p className="text-[#777777] text-[14px]">
            Create a custom post without using a template
          </p>
        </div>
        <button
          className="bg-[#0070ef] text-center text-[16px] text-white w-full rounded-xl py-2 cursor-pointer"
          onClick={() => selectEditor?.('From_Scratch')}
        >
          Create Post
        </button>
      </div>
    </div>
  );
};

export default SelectTemplate;
