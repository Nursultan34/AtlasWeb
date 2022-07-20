import React from 'react'
import Image from '../../../assets/image4.png'
import ellipse from '../../../assets/12.png'

function CardFive() {
  return (
    <div className='big-block5'>
            <div className="block">
                <div class="block-img2">
                    <img src={Image} width={330} height={600} alt="machine"  className='photo3'/>
                </div>
                <div className="block-info">
                    <div className="title">
                        <p className='h1'>AT-550</p>
                        <p className='h32'>ТРОЙНОЙ КОПИРОВАЛЬНО ФРЕЗЕРНЫЙ СТАНОК</p>
                    </div>

                    <div className="table">
                        <div class="table12">
                            <p >Описание</p> 
                            <table>
                                <td>
                                    <tr><img src={ellipse}  className="ellipse"></img>Применяется при вырезке отверстий для замков и ручек с помощью шаблона</tr>


                                    <tr> <img src={ellipse} className="ellipse"></img>Имеется стопорный механизм</tr>

                                    <tr ><img src={ellipse} className="ellipse"></img>Имеется кнопка курок, без нажатия на которого сверло не вращается</tr>

                                    <tr><img src={ellipse} className="ellipse"></img>Имеется система пневматического сжимания профилей</tr>

                                    

                                </td>

                            </table>
                        </div>
                        <div class="table2">
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
                                    <td>1.47 Kw</td>
                                </tr>
                                <tr>
                                    <td>Давление воздуха </td>
                                    <td>6 bar</td>
                                </tr>
                                <tr>
                                    <td>Потребление воздуха </td>
                                    <td>2.5 It/min</td>
                                </tr>
                                <tr>
                                    <td>Ширина машины  </td>
                                    <td>730 mm</td>
                                </tr>
                                <tr>
                                    <td>Длина машины  </td>
                                    <td>560 mm</td>
                                </tr>
                                <tr>
                                    <td>Высота машины </td>
                                    <td>1300 mm</td>
                                </tr>
                                <tr>
                                    <td>Вес машины </td>
                                    <td>150 kg</td>
                                </tr>
                            </table>
                        </div>
                        
                    </div>
                    <div className='button-block2'>
                            <p className='p5'>$2083</p>
                            <p className='p6-2'>$2450</p>
                            <button className='button2'><a href="https://api.whatsapp.com/send?phone=996502019559"  className='buy'>Купить</a></button>
                        </div>
                </div>
            </div>
            <div className='line'></div>

        </div>
  )
}

export default CardFive;