import React from "react";

const Button = ({ button, setShow }) => {
  return (
    <button
      onClick={(event) => setShow(event.target.textContent)}
      className="w-80 h-10 rounded-md py-2 px-6 cursor-pointer relative inline-block shadow-inner bg-gradient-to-r from-[#beadee7a] to-[#617cf250] hover:from-[#617cf250] hover:to-[#beadee7a]"
    >
      <span>기분이 {button.condition}</span>
    </button>
  );
};

const ButtonList = ({ setShow }) => {
  const buttons = [
    { id: 1, condition: "좋아요! 😀" },
    { id: 2, condition: "정말 좋아요! 😄" },
    { id: 3, condition: "최고에요! 😆" },
    { id: 4, condition: "미쳤어요!! 🤪" },
  ];

  return (
    <div className="flex flex-col gap-5">
      {buttons.map((button) => (
        <Button button={button} key={button.id} setShow={setShow} />
      ))}
    </div>
  );
};

export default ButtonList;
