import React from 'react'
import './Mainblack.css'
import building from '../imges/building.png'
import first from '../imges/1.png'
import second from '../imges/2.png'
import third from '../imges/3.png'
import fourth from '../imges/4.png'
import fives from '../imges/5.png'
import oborudovanie from '../imges/oborudovanie.png'




export const Mainblack = () => {
  return (
    <div id='main'>
      <div className="black-block">
        <div className="b-container">

          <div className="description">
            <span className='yellow-text'>Оборудование для производства окон и дверей из ПВХ и аллюминиевого профиля</span><span>— это высокое качество комплектующих, сочетающие инновационные технологии и европейское качество. Мы рады предоставить Вам лучшее оборудование мирового класса.</span>
          </div>
          <div className="img-block">
              <div className="images">
                <img className='oborudovanie480'  src={oborudovanie} alt="" />
                <img className='building' width={530} height={380}  src={building} alt=""/>
             

              
         
            <div className="circle-img">
              <img className='circle pic1' src={first} alt="" srcset="" />
              <img className='circle pic2' src={second} alt="" srcset="" />
              <img className='circle pic3' src={third} alt="" srcset="" />
              <img className='circle pic4' src={fourth} alt="" srcset="" />
              <img className='circle pic5' src={fives} alt="" srcset="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
