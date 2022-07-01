import React from 'react'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo.png'
import map from '../../assets/map.png'
import tel from '../../assets/tel.png'
import whatsapp from '../../assets/whatsapp.png'
import '../Headfoot/Headfoot.css'

function Footer() {
  return (
    <div className='header2' id='header'>
    <div className='container2'>
        <div className='header__inner'>
            <a href="" className="header__logo"><img src={logo} alt="logo" /></a>
            <div className="header__contact contact-header">
                <div className="contact-header__item">
                    <img src={tel} alt="tel" />
                    <img src={whatsapp} alt="whatsapp" />
                    <span>+996 502 01 95 59</span>
                </div>
                <div className="contact-header__item">
                    <img src={map} alt="map" />
                    <span>г. Бишкек, ул. Юнусалиева 90 </span>
                </div>
            </div>
            <div class="header__social social-header">
            <a target='_blank' href="https://instagram.com/kmpcentralasia?igshid=YmMyMTA2M2Y= " className='social-header__item2'><img  src={instagram} alt="instagram" /></a>
                <img className='social-header__item' src={facebook} alt="facebook" />

            </div>
        </div>
    </div>
</div> 
  )
}

export default Footer;