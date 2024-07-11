import React, { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const AccordionItem = ({ id, text, content, isOpen, onToggle }) => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    // <div>
    //   <button
    //     onClick={() => setAccordionIsOpen(!accordionIsOpen)}
    //     className="flex w-full items-center justify-between gap-10 bg-white px-5 py-2 rounded-sm"
    //   >
    //     <span>
    //       <p className="font-semibold">{text}</p>
    //     </span>
    //     {accordionIsOpen ? (
    //       <span>
    //         <FaMinus />
    //       </span>
    //     ) : (
    //       <span>
    //         <FaPlus />
    //       </span>
    //     )}
    //   </button>
    //   <div
    //     className={`bg-white grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${
    //       accordionIsOpen
    //         ? "grid-rows[1fr] opacity-100"
    //         : "grid-rows[0fr] opacity-0"
    //     }`}
    //   >
    //     <div className="overflow-hidden">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
    //       aperiam, reiciendis consequatur ea similique ducimus harum, fuga
    //       ratione autem molestiae vitae veritatis mollitia consectetur laborum
    //       sunt sed aliquid pariatur molestias.
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white w-full mx-auto lg:mx-0 mb-2 items-center">
      <button
        className="w-full flex justify-between gap-10 text-left p-4 font-semibold text-blue-950"
        onClick={() => onToggle(id)}
      >
        {text}
        <span className="font-light">{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`overflow-hidden transition-max-height duration-300 ease-in-out`}
      >
        <div className="p-4 text-gray-700">
          {/* Replace this with the actual content for each accordion item */}
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
