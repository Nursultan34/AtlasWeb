import React from 'react'
import './Catolog.css'
import imageUrl from '../../assets/image1.png'
import imageUrl2 from '../../assets/image2.png'
import imageUrl3 from '../../assets/image3.png'
import imageUrl4 from '../../assets/image4.png'
import imageUrl5 from '../../assets/image5.png'
import ellipseUrl from '../../assets/12.png'
import Card from './Card/Card'
import '../../index.css'


function Catalog() {
    const arr = [{
        title0:"Каталог",
        title:"A-200" ,
        title2:"Одногловочный сварочный станок",
        title3:"Описание",
        title4:"Технические характеристики",
        title5:"Применяется при сварке углов профилей из пвх",
        title6:"Можно регулировать силы сжатия углов и профилей",
        title7:"Имеется программа полного автоматического контроля",
        title8:"Имеется автоматическая регулировка времени при плавлении и остытии",
        title9:"Стандартное напряжение",
        title10:"$1912",
        title11:"$2250",
        imageUrl:`${imageUrl}`,
        ellipse:`${ellipseUrl}`},
        

{
        title:"A-110" ,
        title2:"АВТОМАТИЧЕСКИЙ СТАНОК ДЛЯ РЕЗКИ ПВХ И АЛЮМИНИЕВЫХ ПРОФИЛЕЙ ( С НИЖЕЙ ПОДАЧЕЙ ДИСКА)",
        title3:"Описание",
        title4:"Технические характеристики",
        title5:"Применяется для резки профилей из пвх и алюминия",
        title6:"Возможна резка с поворотом на 180°",
        title7:"Имеется особые стопоры для углов 45°- 30° - 22,5°- 15°- 0°- 15°- 22,5°- 30°- 45°",
        title8:"Диаметр пилы 400 мм",
        title9:"Возможна регулировка скорости поступательного движения пилы",
        title10:"$1912",
        title11:"$2250",
        imageUrl: `${imageUrl2}`,
        ellipse:`${ellipseUrl}`,
    },
    {
        id: '103',
        title:"A-410" ,
        title2:"СТАНОК АВТОМАТ ДЛЯ ОБРАБОТКИ ТОРЦА ИМПОСТА",
        title3:"Описание",
        title4:"Технические характеристики",
        title5:"Пневматическое движение с кнопочным контролем",
        title6:"Может работать с одним или двумя ножами",
        title7:"Беспроблемная подгонка любых профилей",
        title8:"",
        title9:"",
        title10:"$1317",
        title11:"$1550",
        imageUrl:`${imageUrl3}`,
        ellipse:`${ellipseUrl}`,
    },
        {
        title:"AT-550" ,
        title2:"TРОЙНОЙ КОПИРОВАЛЬНО ФРЕЗЕРНЫЙ СТАНОК",
        title3:"Описание",
        title4:"Технические характеристики",
        title5:"Применяется при вырезке отверстий для замков и ручек с помощью шаблона",
        title6:"Имеется стопорный механизм",
        title7:"Имеется кнопка курок, без нажатия на которого сверло не вращаетсяя",
        title8:"Имеется система пневматического сжимания профилей",
        title9:"",
        title10:"$2083",
        title11:"$2450",    
        imageUrl:`${imageUrl4}`,
        ellipse:`${ellipseUrl}`,},
            {
        title:"A-140" ,
        title2:"СТАНОК АВТОМАТ ДЛЯ ОБРАБОТКИ ТОРЦА ИМПОСТА",
        title3:"Описание",
        title4:"Технические характеристики",
        title5:"Пневматическое движение с кнопочным контролем",
        title6:"Может работать с одним или двумя ножами",
        title7:"Беспроблемная подгонка любых профилей",
        title8:"",
        title9:"",
        title10:"$1445",
        title11:"$1700",  
        imageUrl:`${imageUrl5}`,
        ellipse:`${ellipseUrl}`,
    },
]
  return (
    <div className='catalog-container'>
   
    {arr.map((obj) =>(
        <Card
          title0={obj.title0}
          title={obj.title} 
          title2={obj.title2}
          title3={obj.title3}
          title4={obj.title4}
          title5={obj.title5}
          title6={obj.title6}
          title7={obj.title7}
          title8={obj.title8}
          title9={obj.title9}
          title10={obj.title10}
          title11={obj.title11}
          imageUrl={obj.imageUrl}
          ellipseUrl={obj.ellipse}
          />
    ))}
    </div>
  )
}

export default Catalog