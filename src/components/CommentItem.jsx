import React from "react";
import eclipse2 from "../Assets/test2.jpg";

const CommentItem = ({ author, content, date }) => {
  return (
    //   <div className="bg-gray-50 shadow-md p-8 rounded-lg">
    //     <div className="flex flex-col gap-3">
    //       <div className="flex gap-8">
    //         <img src={eclipse2} alt="" className="rounded-full w-14 h-14" />
    //         <div>
    //           <p className="font-bold">@mike</p>
    //           <p className="text-xs italic">4 hours ago</p>
    //         </div>
    //       </div>
    //       <p className="text-sm text-justify leading-5">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
    //         nisi saepe aspernatur cumque debitis velit voluptatibus suscipit
    //         voluptates magnam tempore nam, pariatur, aut harum reprehenderit
    //         beatae quo consequatur nesciunt perspiciatis.
    //       </p>
    //       <div className="flex justify-end gap-7">
    //         <button className="text-xs text-[#274CB2] font-bold">Delete</button>
    //         <button className="text-xs text-gray-100 bg-[#274CB2] font-bold px-6 py-1 rounded-sm">
    //           Edit
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    <div className="p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">{author}</h4>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default CommentItem;
