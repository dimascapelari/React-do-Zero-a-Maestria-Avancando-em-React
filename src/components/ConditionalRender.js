import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("Dimas");

  return (
    <div>
      <h2>Isso será exibido?</h2>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h2>if ternário</h2>
      {name === "Dimas" ? (
        <div>
          <p>O nome é Dimas</p>
        </div>
      ) : (
        <div>
          <p>Nome {name} não foi encontrado</p>
        </div>
      )}
      <button onClick={() => setName("Mariana")}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;
