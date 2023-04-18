const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p style={{ color: "blue" }}>Este carro é novo</p>}
      {km > 0 && <p style={{ color: "red" }}>Este carro é Semi-novo</p>}
    </div>
  );
};

export default CarDetails;
