import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/pizzas/p001')
      .then(response => response.json())
      .then(data => setPizza(data))
      .catch(error => console.error('Error fetching pizza:', error));
  }, []);

  if (!pizza) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card" style={{ width: '30rem', margin: '2rem auto' }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <ul className="card-text">Ingredientes:
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
        <button className="btn btn-dark">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default Pizza;
