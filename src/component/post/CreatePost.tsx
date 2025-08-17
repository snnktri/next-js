import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import SelectTemplate from "./SelectTemplate";
import EditPost from "./EditPost";
import UploadePost from "./UploadePost";
import type { EditorType } from "@/type/resources/postContent.type";
import type { PostContentPartial } from "@/type/resources/postContent.type";
import { getDefaultPostContent as fetchDefaultContent } from "@/type/resources/postContent.type";

interface Props {
  onClick?: () => void;
}



const steps = ["Select Template", "Edit post", "Create and Upload"];

const CreatePost: React.FC<Props> = ({ onClick }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedEditor, setSelectEditor] = useState<EditorType | null>(null);
  const [postContent, setPostContent] = useState<PostContentPartial>({});

  const handleNext = () => {
    setCurrentStep((c) => c+1);
  }
   const handlePrevious = () => {
    setCurrentStep((c) => c-1);
    
  }

  const handleUploade =() => {
    console.log("Uploaidng......");
    onClick?.();
  }

  const handleSelectEditor = (editor: EditorType) => {
    setSelectEditor(editor);
     const defaultContent = fetchDefaultContent(editor);
     setPostContent(defaultContent);
    handleNext();
  }


  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-black flex items-center justify-center">
      <div  className="bg-white border border-gray-500 rounded-md space-y-2 w-[650px] h-[560px]
       overflow-y-auto">
        {/* create post header*/}
        <div className="flex justify-between items-center p-4">
          <div className="text-[12px] text-[#777777] min-w-[300px]">
            <h2 className="text-lg font-bold text-black">Create post</h2>
            <p className="">
              Share your professional updates with your network
            </p>
          </div>
          <button
            onClick={onClick}
            className="p-2 bg-[#e2e5e9] rounded-full text-black cursor-pointer
            flex items-center justify-center"
            aria-label="Close filter overlay"
          >
            <RxCross1 size={12} />
          </button>
        </div>
        <hr className="border-t-2 border-[#dfdfdf]" />
        {/* progress bar */}
        <div className="flex justify-between items-center mb-2 p-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              {/* Step number and label */}
              <p className={`flex items-center gap-2 font-medium ${currentStep === index ? 'text-blue-700':'text-gray-700'}`}>
                <span className={`w-6 h-6 flex items-center justify-center rounded-full
                text-sm ${currentStep === index ? 'bg-blue-700 text-white': 'text-gray-200 bg-gray-500'}`}>
                  {index + 1}
                </span>
                <span className="text-[12px]">{step}</span>
              </p>

              {index < steps.length - 1 && (
                <hr className="border-t-[1.5px] w-20 mx-4 border-gray-300" />
              )}
            </div>
          ))}
        </div>
        {
          currentStep === 0
          ? (<SelectTemplate selectEditor={handleSelectEditor} />)
          : currentStep === 1 && selectedEditor && postContent
          ? (<EditPost 
            onPrev={handlePrevious} 
            onNext={handleNext} 
            editor={selectedEditor}
            postContent={postContent}
            onChangePostContent={setPostContent}
            />)
          : (<UploadePost onPrev={handlePrevious} onUploade={handleUploade} 
          postContent={postContent}/>)
        }
      </div>
    </div>
  );
};

export default CreatePost;
