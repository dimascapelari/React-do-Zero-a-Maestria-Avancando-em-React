import { useState } from "react";

function ListRender() {
  const [list] = useState(["Dimas", "Mariana", "Maria Luiza"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Dimas", age: 40 },
    { id: 2, name: "Mariana", age: 38 },
    { id: 3, name: "Maria Luiza", age: 40 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
}

export default ListRender;
