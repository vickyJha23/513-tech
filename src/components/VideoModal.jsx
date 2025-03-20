import React from "react";
import { FaTimes } from "react-icons/fa";

const VideoModal = ({setModalActive}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.8)] z-50 grid place-items-center">
      <div className="relative">
        <button onClick={() => setModalActive(false)} className="text-slate-300 transition-all duration-400 ease-linear cursor-pointer hover:text-white absolute right-0 -top-8">
          <FaTimes size={28} />
        </button>
        <div className="w-11/12 mx-auto max-w-2xl h-96 bg-white">
            <video className="w-full h-full" controls>
                  <source src="https://youtu.be/BadB1z-V_qU" />  
            </video> 
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
