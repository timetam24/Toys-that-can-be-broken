import React from "react";

const Hello = ({ color, name, isSpecial }) => {
  return (
    <div style={{ color }}>
      {isSpecial && <b>! </b>}
      Hello {name}
    </div>
  );
};

export default Hello;
