import React from 'react'
import './NavMenu.css'

export const NavMenu = () => {
    return (
        <div>
           
            <div className='nav'>
                <div className="menu">
                      <ul>
                      <li>
                       <a className='a' href='#main'> Главная </a>

                       </li>
                       <li>
                           <a className='a'  href='#catalog'>Каталог</a>
                        </li>
                        <li>
                        <a className='a'  href='#delivery'>Доставка</a>
                        
                        </li>
                        <li>
                        <a className='a'  href='#whiteblock'>О компании</a>
                        
                        </li>
                        <li>
                        <a className='a'href='#header'>Контакты</a>
                        </li>
                      </ul>
                </div>
            </div>
        </div>
    )
}
