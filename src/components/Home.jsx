import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

/* Tuve q usar el puerto 4000 por que el 5000 me daba error */  
  const obtenerInfo = async () => {
    let respuesta = await fetch("http://localhost:4000/api/pizzas");
    let data = await respuesta.json();
    setPizzas(data)
  }
  useEffect(() => {
    obtenerInfo()
  }, [])

  /*  useEffect(() => {
      fetch('http://localhost:4000/api/pizzas')
        .then(response => response.json())
        .then(data => setPizzas(data))
        .catch(error => console.error('Error fetching pizzas:', error));
    }, []); */

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-around mt-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza?.id}
            name={pizza?.name}
            price={pizza?.price}
            ingredients={pizza?.ingredients}
            img={pizza?.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
