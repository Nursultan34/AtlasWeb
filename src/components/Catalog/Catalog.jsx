import React from 'react';
import './Catolog.css';
import CardSecond from './Card/CardSecond';
import Card from './Card/Card';
import CardThird from './Card/CardThird';
import CardFive from './Card/CardFive';
import CardThirdSecond from './Card/CardThirdSecond';


function Catalog() {
  
   

  return (
    <div className="catalog-container" id="catalog">
      <h1 className='h1-catalog'>Каталог</h1>
      <Card />
      <CardSecond />
      <CardThirdSecond />

      <CardFive />
      <CardThird />
     
      
    </div>
  );
}

export default Catalog;
