import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform transform hover:scale-105
         ${ mounted && theme === "dark"
          ? "hover:bg-slate-800 bg-slate-800"
          : "hover:bg-slate-50 bg-white"
      }`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ServiceCard;
