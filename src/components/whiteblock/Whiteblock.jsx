import React from 'react'
import './Whiteblock.css'
import certificate1 from '../imges/certificate1.png'
import certificate2 from '../imges/certificate2.png'

export const Whiteblock = () => {
  return (
    <div className='white-block'>
      <div className="white-container">
        <div className="company">
        <div>

          <h3 className='about'>О компании</h3>
        </div>
          <div>

          <p className='company-text'>Компания Атласмак была основана в 2001 году в городе Бурса промышленном центре Турции, основное направление компании — это производство оборудования для выпуска окон и дверей из ПВХ и алюминия.
          </p>
          <p className='company-text' >
            За более чем 20 летний опыт оборудование Атласмак показало себя как надежное и современно решения для производителей светопрозрачных конструкций. География клиентов компании достаточно разнообразна и распространена от южной Америки, Африки, Юго-Восточной, Южной Азии и до Европы и Ближнего востока. Начиная с 2020 года компания Атласмак усилила присутствие на рынке Средней Азии.
          </p>

          <p className='company-text'>
            Быстрый рост компании и выход на все более новые рынки обусловлено использованием передовых технологий, инноваций в обработке ПВХ и значительных инвестиций в улучшение производственного цикла. В связи с чем Атласмак можно назвать мировым брендом, которому доверяют партнеры.
          </p>
          </div>
        </div>
        <div className="certificate">
          <h2>Сертификаты качества</h2>
          
          <div className='image'>
            <img src={certificate1} alt="" srcset="" />
            <img src={certificate2} alt="" srcset="" />
          </div>

          
        </div>
      </div>
    </div>
  )
}
