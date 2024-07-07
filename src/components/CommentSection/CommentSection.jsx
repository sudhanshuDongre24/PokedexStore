import React from "react";
import useTheme from "../../hooks/useTheme";

function CommentSection({ type }) {
  const borderColor = useTheme(type[0], "bordercolor");
  return (
    <div className="px-4 pt-4 pb-8">
      <h2 className="text-center py-4 font-semibold text-[16px]">Comment</h2>

      <div className="flex flex-col gap-2 mb-6">
        <span>⭐⭐⭐⭐⭐</span>
        <p>&#34;Lorem ipsum dolor sit amet.&#34;</p>

        <div>
          <img src="/pngegg.png" alt="" className="w-5 h-5 inline" />
          <span className="underline pl-4">Anonymous</span>
          <span className="text-slate-600 italic no-underline ">
            {" "}
            about 3 hour ago
          </span>
        </div>
      </div>
      <hr className={`${borderColor}`} />

      <div className="flex flex-col gap-2 mb-6 mt-6">
        <span>⭐⭐⭐⭐⭐</span>
        <p>&#34;Lorem ipsum dolor sit amet.&#34;</p>

        <div>
          <img src="/pngegg.png" alt="" className="w-5 h-5 inline" />
          <span className="underline pl-4">Anonymous</span>
          <span className="text-slate-600 italic no-underline ">
            {" "}
            about 3 hour ago
          </span>
        </div>
      </div>
      <hr className={`${borderColor}`} />

      <div className="flex flex-col gap-2 mb-6 mt-6">
        <span>⭐⭐⭐⭐⭐</span>
        <p>&#34;Lorem ipsum dolor sit amet.&#34;</p>

        <div>
          <img src="/pngegg.png" alt="" className="w-5 h-5 inline" />
          <span className="underline pl-4">Anonymous</span>
          <span className="text-slate-600 italic no-underline ">
            {" "}
            about 3 hour ago
          </span>
        </div>
      </div>
      <hr className={`${borderColor}`} />
      <div className="flex flex-col gap-2 mb-6 mt-6">
        <span>⭐⭐⭐⭐⭐</span>
        <p>&#34;Lorem ipsum dolor sit amet.&#34;</p>

        <div>
          <img src="/pngegg.png" alt="" className="w-5 h-5 inline" />
          <span className="underline pl-4">Anonymous</span>
          <span className="text-slate-600 italic no-underline ">
            {" "}
            about 3 hour ago
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
