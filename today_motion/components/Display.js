import React from "react";

const Display = ({ show }) => {
  return (
    <div className="mt-8 w-1/3 py-5 border-4 border-black text-center">
      {show ? show : "아직 선택되지 않았습니다.."}
    </div>
  );
};

export default Display;
