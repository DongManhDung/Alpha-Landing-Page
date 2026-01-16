import { useState } from "react";

export default function FAQItem({ question, index, total }) {
  const [open, setOpen] = useState(false);

  // Tính độ đậm tăng dần cho mỗi mục hỏi đáp 
  const opacity = 0.1 + (index / (total - 1)) * 0.9;

  return (
    <div className="relative">
      <button
        className="
        w-full
        flex items-center justify-between
        py-5 px-6
        text-left
        text-base md:text-lg
        transition
      "
        style={{
          backgroundColor: `rgba(247, 244, 236, ${opacity})`,
        }}
        onClick={() => setOpen(!open)}
      >
        <span className="text-base md:text-lg">{question.q}</span>

        {/* ARROW ICON */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4 shrink-0 opacity-70"
          fill="currentColor"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </button>

      {/* CONTENT */}
      <div
        className={`grid transition-all duration-300 ease-in-out px-6 text-left ${
          open
            ? "grid-rows-[1fr] opacity-100 pb-6"
            : "grid-rows-[0fr] opacity-0"
        }`}
        style={open ? {backgroundColor: `rgba(247, 244, 236, ${opacity})` } : {}}
      >
        <div className="overflow-hidden text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {question.a}
        </div>
      </div>
    </div>
  );
}
