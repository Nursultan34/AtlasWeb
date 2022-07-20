import React from 'react'
import ImageUrl from '../../../assets/image5.png'
import ellipse from '../../../assets/12.png'

function CardThirdSecond() {
  return (
    <div className='big-block'>
            <div className="block">
                <div class="block-img5">
                    <img src={ImageUrl} width={330} height={600} alt="machine" className='photo5'/>
                </div>
                <div className="block-info">
                    <div className="title">
                        <p className='h1'>A-410</p>
                        <p className='h32'>СТАНОК АВТОМАТ ДЛЯ ОБРАБОТКИ ТОРЦА ИМПОСТА</p>
                    </div>

                    <div className="table">
                        <div class="table13">
                            <p className='pm'>Описание</p> 
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
                    <div className='button-block8'>
                            <p className='p5'>$2083</p>
                            <p className='p6'>$2450</p>
                            <button className='button23'><a href="https://api.whatsapp.com/send?phone=996502019559"  className='buy'>Купить</a></button>
                        </div>
                </div>
            </div>
            
            <div className='line'></div>
        </div>
  )
}

export default CardThirdSecond