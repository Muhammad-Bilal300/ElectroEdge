import React from "react";
import ElectroEdgeIcon from "../../../../../../Assets/ElectroEdge.PNG";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="w-2/4 md:w-1/4">
      <img
        src={ElectroEdgeIcon}
        alt="ElctroEdge"
        className="h-[2rem] cursor-pointer"
        onClick={() => {
          navigate(`/`);
        }}
      />
    </div>
  );
};

export default Logo;
