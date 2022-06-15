import React from 'react'
import ImageUrl from '../../../assets/image5.png'
import ellipse from '../../../assets/12.png'

function CardThirdSecond() {
  return (
    <div className='big-block'>
            <div className="block">
                <div class="block-img">
                    <img src={ImageUrl} width={330} height={600} alt="machine" />
                </div>
                <div className="block-info">
                    <div className="title">
                        <p className='h1'>A-200</p>
                        <p className='h32'>Одноголовочный сварочный станок</p>
                    </div>

                    <div className="table">
                        <div class="table13">
                            <p >Описание</p> 
                            <table>
                                <td className='td'> 
                                    <tr><img src={ellipse} className="ellipse"></img>Пневматическое движение с кнопочным контролем</tr>


                                    <tr> <img src={ellipse} className="ellipse"></img>Может работать с одним или двумя ножами</tr>

                                    <tr ><img src={ellipse} className="ellipse"></img>Беспроблемная подгонка любых профилей</tr>
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
                                    <td>1.5 Kw</td>
                                </tr>
                                <tr>
                                    <td>Давление воздуха </td>
                                    <td>6 bar</td>
                                </tr>
                                <tr>
                                    <td>Потребление воздуха </td>
                                    <td>9 It/min</td>
                                </tr>
                                <tr>
                                    <td>Ширина машины  </td>
                                    <td>510 mm</td>
                                </tr>
                                <tr>
                                    <td>Длина машины  </td>
                                    <td>1250 mm</td>
                                </tr>
                                <tr>
                                    <td>Высота машины </td>
                                    <td>1210 mm</td>
                                </tr>
                                <tr>
                                    <td>Вес машины </td>
                                    <td>160 kg</td>
                                </tr>
                            </table>
                        </div>
                        
                    </div>
                    <div className='button-block'>
                            <p className='p5'>$2083</p>
                            <p className='p6'>$2450</p>
                            <button className='button2'><a href=""  className='buy'>Купить</a></button>
                        </div>
                </div>
            </div>
            

        </div>
  )
}

export default CardThirdSecond