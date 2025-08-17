import React from 'react';
import { CgDanger } from "react-icons/cg";
interface Props {
  onCancel?: () => void;
  onConfirm?: () => void;
}

const DeleteOverlay: React.FC<Props> = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center space-y-6">
        {/* Icon + Message */}
        <div className="flex gap-x-2 items-center justify-center py-2">
         <CgDanger />
          <p className="text-[#333333] text-lg font-medium text-center">Your post will be deleted.</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-[#0070EF] text-white rounded-3xl font-medium hover:bg-[#005edb] transition-colors duration-150
            cursor-pointer"
          >
            Okay
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-2 border border-[#0070EF] text-[#0070EF] rounded-3xl font-medium
             hover:bg-[#0070EF] hover:text-white transition-colors duration-150
             cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOverlay;
