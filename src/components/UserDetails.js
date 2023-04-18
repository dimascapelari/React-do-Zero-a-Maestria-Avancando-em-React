const UserDetails = ({ nome, sexo, idade }) => {
  return (
    <div>
      <h2>Aluno(a)</h2>
      <ul>
        <li>Nome: {nome}</li>
        <li>Sexo: {sexo}</li>
        <li>Idade: {idade}</li>
      </ul>
      {idade >= 18 && <p style={{ color: "blue" }}>Pode tirar Habilitação</p>}
      {idade < 18 && (
        <p style={{ color: "red" }}>Ainda não pode tirar Habilitação</p>
      )}
    </div>
  );
};

export default UserDetails;
