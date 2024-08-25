import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={{ width: '30rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <ul className="card-text text-center fw-lighter fs-5">Ingredientes:
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        <hr />
        <p className="card-text text-center fw-bolder fs-4">Precio: ${price.toLocaleString()}</p>
        <div className='position-relative mb-3 pb-4'>
        <button className="btn btn-outline-dark position-absolute top-0 start-0">Ver más 👀</button>
        <button className="btn btn-dark position-absolute top-0 end-0">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;