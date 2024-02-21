import React, { useState, useEffect } from 'react';
import './Card.css';

function Card() {
  const [info, setInfo] = useState([]);

  function getDataApi() {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDataApi();
  }, []);

  const handleDelete = (index) => {
    const updatedInfo = [...info];
    updatedInfo.splice(index, 1);
    setInfo(updatedInfo);
  };

  return (
    <div className='wrapppper'>
      {info.map((element, index) => (
        <div key={index} className="cards">
          <img src={element.attributes.image} alt="" />
          <h3>{element.attributes.title}</h3>
          <h4>${element.attributes.price}</h4>
          <button className='betnnnnnnnn' onClick={() => handleDelete(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
