import React from "react";

const CreatePet = ({ species, name, age, onChange, onCreate }) => {
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="species"
        placeholder="species"
        onChange={onChange}
        value={species}
      />
      <input name="age" placeholder="나이" onChange={onChange} value={age} />
      <button onClick={onCreate}>추가하기</button>
    </div>
  );
};

export default CreatePet;
