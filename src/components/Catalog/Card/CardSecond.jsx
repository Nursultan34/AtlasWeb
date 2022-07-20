import React from 'react'
import './Card.css'
import image from '../../../assets/image2.png'
import ellipse from '../../../assets/12.png'

function CardSecond() {
    return (
        <div className='big-block'>
                     
            <div className="block">
                <div class="block-img3">
                    <img src={image} width={330} height={600} alt="machine"  className='photo2'/>
                </div>
                <div className="block-info">
                    <div className="title-1">
                        <p className='h1'>A-110</p>
                        <p className='h32'>АВТОМАТИЧЕСКИЙ СТАНОК ДЛЯ РЕЗКИ ПВХ И АЛЮМИНИЕВЫХ ПРОФИЛЕЙ<p className='p-title'> (С НИНЖЕЙ ПОДАЧЕЙ ДИСКА)</p></p>
                    </div>

                    <div className="table">
                        <div class="table1">
                            <p >Описание</p> 
                            <table>
                                <td>
                                    <tr><img src={ellipse} className="ellipse"></img>Применяется для резки профилей из пвх и алюминия</tr>


                                    <tr> <img src={ellipse} className="ellipse"></img>Возможна резка с поворотом на 180°</tr>

                                    <tr ><img src={ellipse} className="ellipse"></img>Имеется особые стопоры для углов 45°- 30° - 22,5°- 15°- 0°- 15°- 22,5°- 30°- 45°</tr>

                                    <tr><img src={ellipse} className="ellipse"></img>Диаметр пилы 400 мм</tr>

                                    <tr><img src={ellipse} className="ellipse"></img>Возможна регулировка скорости поступательного движения пилы</tr>

                                </td>

                            </table>
                        </div>
                        <div class="table3">
                           <p>Технические характеристики</p> 
                            <table>
                                <tr>
                                    <td>Стандартное напряжение</td>
                                    <td>380 V</td>
                                </tr>
                                <tr>
                                    <td>Частота </td>
                                    <td>50 Hz</td>
                                </tr>
                                <tr>
                                    <td>Суммарная мощность </td>
                                    <td>1.1 Kw</td>
                                </tr>
                                <tr>
                                    <td>Давление воздуха </td>
                                    <td>6 bar</td>
                                </tr>
                                <tr>
                                    <td>Потребление воздуха </td>
                                    <td>6 It/min</td>
                                </tr>
                                <tr>
                                    <td>Ширина машины  </td>
                                    <td>660 mm</td>
                                </tr>
                                <tr>
                                    <td>Длина машины  </td>
                                    <td>800 mm</td>
                                </tr>
                                <tr>
                                    <td>Высота машины </td>
                                    <td>1270 mm</td>
                                </tr>
                                <tr>
                                    <td>Вес машины </td>
                                    <td>150 kg</td>
                                </tr>
                            </table>
                        </div>
                        
                    </div>
                    <div className='button-block4'>
                            <p className='p5-3'>$2083</p>
                            <p className='p6-3'>$2450</p>
                            <button className='button2'><a href="https://api.whatsapp.com/send?phone=996502019559"  className='buy'>Купить</a></button>
                        </div>
                </div>
            </div>
            <div className='line2'></div>
        </div>
    )
}

export default CardSecond