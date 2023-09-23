import React, { useState, useRef, useEffect, useMemo } from "react";
import CreatePet from "./CreatePet";

const countActivePets = (pets) => {
  console.log("활성 펫 수를 세는 중...");
  return pets.filter((pet) => pet.active).length;
};

const Pet = ({ pet, onRemove, onToggle }) => {
  useEffect(() => {
    console.log("pet 값이 설정됨");
    console.log(pet);
    return () => {
      console.log("pet 가 바뀌기 전..");
      console.log(pet);
    };
  }, [pet]);

  return (
    <li>
      {pet.name}는{" "}
      <b
        style={{ cursor: "pointer", color: pet.active ? "red" : "black" }}
        onClick={() => onToggle(pet.id)}
      >
        {" "}
        {pet.species}
      </b>
      입니다. 그리고 {pet.age}살 입니다.
      <button onClick={() => onRemove(pet.id)}>삭제</button>
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
    { name: "벨라", species: "고양이", age: "5", id: 111, active: true },
    { name: "루시", species: "강아지", age: "3", id: 112, active: false },
    { name: "데이지", species: "토끼", age: "2", id: 113, active: false },
    { name: "몰리", species: "고양이", age: "1", id: 114, active: false },
    { name: "매기", species: "강아지", age: "6", id: 115, active: false },
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

  const onRemove = (id) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  const onToggle = (id) => {
    setPets(
      pets.map((pet) => (pet.id === id ? { ...pet, active: !pet.active } : pet))
    );
  };

  const count = useMemo(() => countActivePets(pets), [pets]);
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
          <Pet pet={pet} key={pet.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
      </ul>
      <div>활성 펫 수: {count}</div>
    </>
  );
};

export default PetList;
