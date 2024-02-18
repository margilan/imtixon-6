import React from 'react'
import './Product.css'
import { useState , useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Product() {
  const [products , setProducts] = useState([]);

  const [lang , setLang] = useState('en')
  const {t , i18n} = useTranslation()

function getDataApi(){
  fetch("https://strapi-store-server.onrender.com/api/products ")
  .then((res) => res.json())
  .then((data) => {
    setProducts(data.data)
  })
  .catch((err) => console.log(err));
}
  useEffect(()=>{
    getDataApi()
  } , [])

  return (
    <>
    <div className="wrappper">
      <form className='form'>
        <input type="text" className='input-one'  placeholder='Search Product' />
        <select className='select'>
          <option value="0">{t("ham")}</option>
          <option value="1">Tables</option>
          <option value="2">Chairs</option>
          <option value="3">Kids</option>
          <option value="4">Sofas</option>
          <option value="5">Beds</option>
        </select>
        <select className='selectt'>
          <option value="0">{t("ham")}</option>
          <option value="1">Modenza</option>
          <option value="2">Luxora</option>
          <option value="3">Artifex</option>
          <option value="4">Comfora</option>
          <option value="5">Homestead</option>
        </select>
      </form>
      <div className="buttons">
      <button className='btn-onee'>{t('onebtn')}</button>
      <button className='btn-two'>{t('twobtn')}</button>
      </div>

      <div className="cardssss">
      {
          products.map((element , index)=>{
            return (
              <div key={index} className="cardlar">
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
    )
}

export default Product