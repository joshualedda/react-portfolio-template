import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const SkillCard = ({ name, description, img }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`text-white w-full max-w-sm flex flex-col rounded-xl shadow-lg p-4 ${
        mounted && theme === "dark"
          ? "hover:bg-slate-800 bg-slate-800"
          : "hover:bg-slate-50 bg-white"
      } hover:scale-100 link`}
    >
      <div className="flex items-center justify-start">
        <div className="flex items-center space-x-4">
          
          <div
            className={`text-md font-bold ${
              mounted && theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            {name ? name : "Heading"}
          </div>
        </div>
      </div>
      {/* Comment for the meantime */}
      {/* <div
 className={`mt-4 text-sm font-bold ${
          mounted && theme === "dark" ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {description ? description : "No Data"}
      </div> */}
      <img
        alt={name}
        className="w-8 h-10 hover:scale-125 transition-all ease-out duration-300"
        src={img}
      />
    </div>
  );
};

export default SkillCard;
