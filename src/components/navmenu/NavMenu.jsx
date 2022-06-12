import React from 'react'
import './NavMenu.css'

export const NavMenu = () => {
    return (
        <div>
           
            <div className='nav'>
                <div className="menu">
                        <a href='#main'> Главная </a>
                        <a href='#catalog'>Каталог</a>
                        <a href='#delivery'>Доставка</a>
                        <a href='#whiteblock'>О компании</a>
                        <a href='#header'>Контакты</a>

                </div>
            </div>
        </div>
    )
}
