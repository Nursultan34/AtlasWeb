import React from 'react'
import './Mainblack.css'
import building from '../components/imgages/building.png'
import first from '../components/imgages/1.png'
import second from '../components/imgages/2.png'
import third from '../components/imgages/3.png'
import fourth from '../components/imgages/4.png'
import fives from '../components/imgages/5.png'



export const Mainblack = () => {
  return (
    <div>
      <div className="black-block">
        <div className="b-container">

          <div className="description">
            <span className='yellow-text'>Оборудование для производства окон и дверей из ПВХ и аллюминиевого профиля</span><span>— это высокое качество комплектующих, сочетающие инновационные технологии и европейское качество. Мы рады предоставить Вам лучшее оборудование мирового класса.</span>
          </div>
          <div className="img-block">
              <div className="building">
              <img width={539} height={380} src={building} alt="" srcset="" />
              </div>
            <div className="circle-img">
              <img className='circle' src={first} alt="" srcset="" />
              <img className='circle' src={second} alt="" srcset="" />
              <img className='circle' src={third} alt="" srcset="" />
              <img className='circle' src={fourth} alt="" srcset="" />
              <img className='circle' src={fives} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
