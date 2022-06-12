import React from 'react'
import ellipse from '../../../assets/12.png'
import '../Catolog.css'
import react from 'react-router-dom'


function Card(props) {


  return (
    <div className='big-block'>
    <div className="block">
        <div class="block-img">
            <img src='' width={330} height={600} alt="machine" />
        </div>
        <div className="block-info">
            <div className="title">
                <p className='h1'>{props.title}</p>
                <p className='h32'>{props.title2}</p>
            </div>

            <div className="table">
                <div class="table1">
                    <p>{props.title3}</p> 
                    <table>
                        <td>
                            <tr><img src={ellipse} className="ellipse"></img>{props.title5}</tr>


                            <tr> <img src={ellipse} className="ellipse"></img>{props.title6}</tr>

                            <tr ><img src={ellipse} className="ellipse"></img>{props.title7}</tr>

                            <tr><img src={ellipse} className="ellipse"></img>{props.title8}</tr>

                        </td>

                    </table>
                </div>
                <div class="table2">
                   <p>{props.title4}</p> 
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
        </div>
    </div>

</div>
  )
}

export default Card




