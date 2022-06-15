import React from 'react'
import './NavMenu.css'

export const NavMenu = () => {
    return (
        <div>
           
            <div className='nav'>
                <div className="menu">
                        <a className='a' href='#main'> Главная </a>
                        <a className='a'  href='#catalog'>Каталог</a>
                        <a className='a'  href='#delivery'>Доставка</a>
                        <a className='a'  href='#whiteblock'>О компании</a>
                        <a className='a'href='#header'>Контакты</a>

                </div>
            </div>
        </div>
    )
}
