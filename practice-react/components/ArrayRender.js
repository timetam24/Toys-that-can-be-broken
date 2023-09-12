import React, { useState } from "react";

const User = ({ user }) => {
  const [show, setShow] = useState(false);

  //   const showHandler = () => {
  //     show ? setShow(false) : setShow(true);
  //   };

  return (
    <>
      <li onClick={() => setShow(!show)}>{user.name}</li>
      {show && (
        <div>
          <p>{user.email}</p>
          <p>{user.job}</p>
        </div>
      )}
    </>
  );
};

const ArrayRender = () => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  return (
    <>
      <h1>UserList</h1>
      <ul>
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </ul>
    </>
  );
};

export default ArrayRender;
