import React from 'react'
import './NavMenu.css'

export const NavMenu = () => {
    return (
        <div>
           
            <div className='nav'>
                <div className="menu">
                    <li>
                        <a href='#'> Главная </a>
                    </li>
                    <li>
                        <a href='#'>Каталог</a>
                    </li>
                    <li>
                        <a href='#'>Доставка</a>
                    </li>
                    <li>
                        <a href='#'>О компании</a>
                    </li>
                    <li>
                        <a href='#'>Контакты</a>
                    </li>
                </div>
            </div>
        </div>
    )
}
