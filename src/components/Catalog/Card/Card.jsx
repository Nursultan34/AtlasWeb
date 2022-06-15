import React from 'react'
import ellipse from '../../../assets/12.png'
import '../Catolog.css'
import react from 'react-router-dom'
import imageUrl1 from '../../../assets/image1.png'
import imageUrl2 from '../../../assets/image2.png'


function Card() {
  return (
    <div className='big-block'>
            <div className="block">
                <div class="block-img">
                    <img src={imageUrl1} width={330} height={600} alt="machine" />
                </div>
                <div className="block-info">
                    <div className="title">
                        <p className='h1'>A-200</p>
                        <p className='h32'>Одноголовочный сварочный станок</p>
                    </div>

                    <div className="table">
                        <div class="table12">
                            <p >Описание</p> 
                            <table>
                                <td>
                                    <tr><img src={ellipse} className="ellipse"></img>Применяется при сварке углов профилей из пвх</tr>


                                    <tr> <img src={ellipse} className="ellipse"></img>Можно регулировать силы сжатия углов и профилей</tr>

                                    <tr ><img src={ellipse} className="ellipse"></img>Имеется программа полного автоматического контроля</tr>

                                    <tr><img src={ellipse} className="ellipse"></img>Имеется автоматическая регулировка времени при плавлении и остытии</tr>

                                   

                                </td>

                            </table>
                        </div>
                        <div class="table2">
                           <p>Технические характеристики</p> 
                            <table>
                                <tr>
                                    <td>Стандартное напряжение</td>
                                    <td>220 V</td>
                                </tr>
                                <tr>
                                    <td>Частота </td>
                                    <td>50 Hz</td>
                                </tr>
                                <tr>
                                    <td>Суммарная мощность </td>
                                    <td>1.5 Kw</td>
                                </tr>
                                <tr>
                                    <td>Давление воздуха </td>
                                    <td>6 bar</td>
                                </tr>
                                <tr>
                                    <td>Потребление воздуха </td>
                                    <td>26 It/min</td>
                                </tr>
                                <tr>
                                    <td>Ширина машины  </td>
                                    <td>800 mm</td>
                                </tr>
                                <tr>
                                    <td>Длина машины  </td>
                                    <td>720 mm</td>
                                </tr>
                                <tr>
                                    <td>Высота машины </td>
                                    <td>1450 mm</td>
                                </tr>
                                <tr>
                                    <td>Вес машины </td>
                                    <td>215 kg</td>
                                </tr>
                            </table>
                        </div>
                        
                    </div>
                    <div className='button-block2'>
                            <p className='p5'>$2083</p>
                            <p className='p6'>$2450</p>
                            <button className='button2'><a href=""  className='buy'>Купить</a></button>
                        </div>
                </div>
            </div>
            <div className='line'></div>

        </div>
  )
}

export default Card




