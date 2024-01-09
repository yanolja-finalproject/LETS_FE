import React from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div>
      <div className="bg-white sticky top-0  p-2 ">
        <div className="w-4/5 mx-auto rounded-full">
          <div
            className="bg-pink text-white text-xs font-bold text-blue-100 text-center leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
