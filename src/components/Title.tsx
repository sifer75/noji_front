import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";

interface TitleProps {
  id: string;
}

function Title({ id }: TitleProps) {
  const location = useLocation();
  const params = location.pathname.split("/").filter(p => p);

  return (
    <div
      id={`Layout__menu__${id}`}
      className="min-h-20 h-20 bg-gray-300 px-20 flex items-center justify-between w-full"
    >
      <div className="flex items-center gap-2">
        <button className="bg-gray-500 rounded-3xl p-2.5 hover:bg-gray-400" onClick={() => window.history.back()}>
          <FaArrowLeft size={20} color={"white"} />
        </button>
        <p>
          {params.map((param, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' / '}
              {param}
            </React.Fragment>
          ))}
        </p>
      </div>
      <p>créer</p>
    </div>
  );
}

export default Title;