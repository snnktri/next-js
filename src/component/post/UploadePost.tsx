import { PostContentPartial } from "@/type/resources/postContent.type";
import React from "react";

interface Props {
  onPrev?: () => void;
  onUploade?: () => void;
  postContent?: PostContentPartial;
}

const UploadePost: React.FC<Props> = ({ onPrev, onUploade, postContent }) => {
  console.log(postContent?.images);
  return (
    <div className="p-4">
      <div className="">
        <div className="space-y-4 p-2">
          {/* content */}
          <div dangerouslySetInnerHTML={{ __html: postContent?.content || "" }} />
          <p>{postContent?.hashTags}</p>
          

          
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={onPrev}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          type="button"
        >
          Previous
        </button>
        <button
          onClick={onUploade}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UploadePost;
