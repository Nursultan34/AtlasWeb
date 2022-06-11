import React from 'react'
import './Whiteblock.css'
import certificate1 from '../imges/certificate1.jpeg'
import certificate2 from '../imges/certificate2.jpeg'

export const Whiteblock = () => {
  return (
    <div className='white-block'>
      <div className="white-container">
        <div className="company">
        <div>

          <h3 className='about'>О компании</h3>
        </div>
          <div>

          <p className='company-text'>Компания Atlasmak была основана в 2001 году в городе Бурса промышленном центре Турции, основное направление компании — это производство оборудования для выпуска окон и дверей из ПВХ и алюминия.
          </p>
          <p className='company-text' >
            За более чем 20 летний опыт оборудование Atlasmak показало себя как надежное и современно решения для производителей светопрозрачных конструкций. География клиентов компании достаточно разнообразна и распространена от южной Америки, Африки, Юго-Восточной, Южной Азии и до Европы и Ближнего востока. Начиная с 2020 года компания Atlasmak усилила присутствие на рынке Средней Азии.
          </p>

          <p className='company-text'>
            Быстрый рост компании и выход на все более новые рынки обусловлено использованием передовых технологий, инноваций в обработке ПВХ и значительных инвестиций в улучшение производственного цикла. В связи с чем Atlasmak можно назвать мировым брендом, которому доверяют партнеры.
          </p>
          </div>
        </div>
        <div className="certificate">
          <h2>Сертификаты качества</h2>
          
          <div className='image'>
            <img width={210} height={296} className='img1' src={certificate1} alt="" srcset="" />
            <img width={210} height={296}  className='img2' src={certificate2} alt="" srcset="" />
          </div>

          
        </div>
      </div>
    </div>
  )
}
