import React, { useEffect, useState } from "react";
import "./Home.css";
import img from "./mebel.jpg";
import { useTranslation } from 'react-i18next'


function Home() {
  
const [info , setInfo] = useState([]);

function getDataApi(){
  fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
  .then((res) => res.json())
  .then((data) => {
    setInfo(data.data)
  })
  .catch((err) => console.log(err));
}
  useEffect(()=>{
    getDataApi()
  } , [])

  const [lang , setLang] = useState('en')
  const {t , i18n} = useTranslation()

  return (
    <>
      <div className="wraper">
        <div className="text">
          <h2>
            {t('title')}
          </h2>
        </div>
        <div className="two-text">
          <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore{" "}
            <br /> repellat explicabo enim soluta temporibus asperiores aut
            obcaecati perferendis porro nobis.
          </h4>
        </div>
        <div className="btnn">
          <button>{t('btn')}</button>
        </div>
      </div>
      <div className="wraper-footer">
        <div className="textt">
          <h2>{t('titl')}</h2>
        </div>
        <hr className="hr" />
        <div className="cardss">
          {
          info.map((element , index)=>{
            return (
              <div key={index} className="cards">
            <img src={element.attributes.image} alt="" />
            <h3>{element.attributes.title}</h3>
            <h4>${element.attributes.price}</h4>
          </div>
            )
          })
          }
        </div>
      </div>
    </>
  );
}

export default Home;
