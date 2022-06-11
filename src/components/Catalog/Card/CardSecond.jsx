import React from 'react'
import './Card.css'
import image from '../../../assets/image2.png'

function CardSecond() {
  return (
    <div>
       
        <div className='main'>
            <h1 className='h1'>A-110</h1>
            <h2 className='h32'>АВТОМАТИЧЕСКИЙ СТАНОК ДЛЯ РЕЗКИ ПВХ И АЛЮМИНИЕВЫХ ПРОФИЛЕЙ<p className='p-title'>( С НИЖЕЙ ПОДАЧЕЙ ДИСКА)</p></h2>
            <div>
                <div className='title'>
                    <h3 className='h3'>Описание</h3>
                    <h3 className='h36'>Технические характеристики</h3>
                </div>
                <div className='container'>
                     <div className='title2'>
                     <td className='p-9'>Стандартное напряжение</td>
                        <p className='p-7'> Применяется для резки </p>
                        <p className='p-92'>Частота </p>
                        <p className='p-8'>профилей из пвх и алюминия</p>
                        <p className='p-7'>Возможна резка с поворотом на </p>
                        <p className='p-7'>180°</p>
                        <p className='p-7'>Имеется особые стопоры для углов </p>
                        <p className='p-7'>45°- 30° - 22,5°- 15°- 0°- 15°- 22,5°- 30°- </p>
                        <p className='p-7'>45°</p>
                        <p className='p-7'>Диаметр пилы 400 мм</p>
                        
                        <p className='p-7'>Возможна регулировка скорости </p>
                        <p className='p-7'>поступательного движения пилы</p>
                        
                              
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                           
                     </div>  
                
                </div>
            </div>
        </div>
        <div className='img'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default CardSecond