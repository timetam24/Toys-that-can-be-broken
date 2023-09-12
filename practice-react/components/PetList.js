import React, { useState, useRef } from "react";
import CreatePet from "./CreatePet";

const Pet = ({ pet }) => {
  return (
    <li>
      {pet.name}는 {pet.species}입니다. 그리고 {pet.age}살 입니다.
    </li>
  );
};

const PetList = () => {
  const [inputs, setInputs] = useState({
    species: "",
    name: "",
    age: "",
  });

  const { species, name, age } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const [pets, setPets] = useState([
    { name: "벨라", species: "고양이", age: "5", id: 111 },
    { name: "루시", species: "강아지", age: "3", id: 112 },
    { name: "데이지", species: "토끼", age: "2", id: 113 },
    { name: "몰리", species: "고양이", age: "1", id: 114 },
    { name: "매기", species: "강아지", age: "6", id: 115 },
  ]);

  const nextId = useRef(116);

  const onCreate = () => {
    const pet = {
      id: nextId.current,
      species,
      name,
      age,
    };

    setPets([...pets, pet]);

    setInputs({
      species: "",
      name: "",
      age: "",
    });

    nextId.current += 1;
  };

  return (
    <>
      <CreatePet
        species={species}
        name={name}
        age={age}
        onChange={onChange}
        onCreate={onCreate}
      />
      <ul>
        {pets.map((pet) => (
          <Pet pet={pet} key={pet.id} />
        ))}
      </ul>
    </>
  );
};

export default PetList;
