import React from 'react'
import ellipse from '../../../assets/12.png'
import '../Catolog.css'
import react from 'react-router-dom'


function Card(props) {
  return (
    <div className='catalog-container'>
    <h1 className='catalog-h1'>{props.title0}</h1>
    <div className='catalog-main'>
      <div>
        <div>
        <img src={props.imageUrl} alt="#" className='catalog-img' />
        </div>
        <div>
         <h1 className='catalog-b'>{props.title2}</h1>
         <div>
          <div>
          <h2 className='catalog-a'>{props.title}</h2>
            <h2 className='catalog-h2'>{props.title3} </h2>
            <div className='span'>
                <p className='p2'><img src={props.ellipseUrl} className="ellipse"></img>{props.title5}</p>
                <p className='p3'><img src={props.ellipseUrl}  className="ellipse"></img>{props.title6}</p>
                <p className='p4'><img src={props.ellipseUrl}   className="ellipse"></img>{props.title7}</p>
                <p className='p5'><img src={props.ellipseUrl}  className="ellipse"></img>{props.title8}</p>
                <p className='p6'><img src={props.ellipseUrl}  className="ellipse"></img>{props.title9}</p>
                </div>
          </div>
          <div>
          <h2 className='catalog-2'>{props.title4}</h2>
          <div>
            <div className=''>
             <tr>
             <td className='second-block0'>Стандартное напряжение</td>
          <td className='second-block1'>Частота  </td>
          <td className='second-block2'>Суммарная мощность</td>
          <td className='second-block2'>Давление воздуха   </td>
          <td className='second-block3'>Потребление воздуха </td>
          <td className='second-block4'>Ширина машины  </td>
          <td className='second-block5'>Длина машины  </td>
          <td className='second-block6'>Высота машины  </td>
          <td className='second-block7'>Вес машины </td>
             </tr>
          <tr>
          <td>220 V</td>
          <td>50 Hz</td>
          <td>1.5 Kw</td>
          <td>6 bar</td>
          <td>26 It/min</td>
          <td>800 mm</td>
          <td>720 mm</td>
          <td>1450 mm</td>
          <td>215 kg</td>
          </tr>
          </div>
         </div>
          </div>
        </div>
        <h1 className='h22'>{props.title10}
              <h6 ><del className='h55'>{props.title11}</del></h6>
              <button
              className='button-li'><a href="https://api.whatsapp.com/send?phone=996502019559" className='li'>Купить</a>
              </button>
          </h1>
        </div>
          <div>
        </div>
      </div>
        
    </div>
    <div className='line'></div>
    
     
  </div>
  )
}

export default Card




