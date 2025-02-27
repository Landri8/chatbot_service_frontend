import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const AccordionItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-200 rounded-[16px] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="font-medium text-[14px] lg:text-[16px]">{title}</span>
        <div className="w-[28px] h-[28px] lg:w-[30px] lg:h-[30px] bg-blue-950 rounded-full text-[15px] text-white flex items-center justify-center">{isOpen ? <IoChevronUp /> : <IoChevronDown />}</div>
      </button>

      {/* Content */}
      <div
        className={`transition-all overflow-hidden ${
          isOpen ? "max-h-[200px] py-3 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <p className="text-gray-700 text-[12px] lg:text-[14px]">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;