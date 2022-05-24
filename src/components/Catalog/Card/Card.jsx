import React from 'react'
import ellipse from '../../../assets/12.png'
import '../Catolog.css'
import react from 'react-router-dom'


function Card(props) {
  return (
    <div className='catalog-container'>
    <h1 className='catalog-h1'>{props.title0}</h1>
    <div className='catalog-main'>
        <img src={props.imageUrl} alt="#" className='catalog-img' />
        <h2 className='catalog-a'>{props.title}</h2>
        <h1 className='catalog-b'>{props.title2}</h1>
        <h2
         className='catalog-h2'>{props.title3} 
        <h2 
        className='catalog-2'>{props.title4}</h2>
        </h2>
        <div className='span'>
                
            <p className='p2'><img src={props.ellipseUrl} className="ellipse"></img>{props.title5}</p>
            <p className='p3'><img src={props.ellipseUrl}  className="ellipse"></img>{props.title6}</p>
            <p className='p4'><img src={props.ellipseUrl}   className="ellipse"></img>{props.title7}</p>
            <p className='p5'><img src={props.ellipseUrl}  className="ellipse"></img>{props.title8}</p>
            <p className='p6'><img src={props.ellipseUrl}  className="ellipse"></img>{props.title9}</p>
            </div>
         {/* <section className='span2'>
          <p className='second-block1'>Частота </p>
          <p className='second-block2'>Суммарная мощность </p>
          <p className='second-block3'>Потребление воздуха </p>
          <p className='second-block4'>Ширина машины </p>
          <p className='second-block5'>Длина машины </p>
          <p className='second-block6'>Высота машины </p>
          <p className='second-block7'>Вес машины </p>
          </section> */}
          <h1 className='h22'>{props.title10}
              <h6 ><del className='h55'>{props.title11}</del></h6>
              <button
              className='button-li'><a href="https://api.whatsapp.com/send?phone=996502019559" className='li'>Купить</a>
              </button>
              </h1>
        
    </div>
    <div className='line'></div>
    
     
  </div>
  )
}

export default Card