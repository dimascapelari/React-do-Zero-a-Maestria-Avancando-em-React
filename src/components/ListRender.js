import { useState } from "react";

function ListRender() {
  const [list] = useState(["Dimas", "Mariana", "Maria Luiza"]);

  const [users] = useState([
    { id: 1, name: "Dimas", age: 40 },
    { id: 2234124, name: "Mariana", age: 38 },
    { id: 33231, name: "Maria Luiza", age: 40 },
  ]);

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
    </div>
  );
}

export default ListRender;
