import React from 'react'
import './Headfoot.css'
import logo from '../../assets/logo.png'
import map from '../../assets/map.png'
import tel from '../../assets/tel.png'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'

export default function Headfoot() {
	return (
		<div className='header'>
			<div className='container'>
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
						<img className='social-header__item' src={instagram} alt="instagram" />
						<img className='social-header__item' src={facebook} alt="facebook" />

					</div>
				</div>
			</div>
		</div>
	);
}

{/* <div className='block-header'>
            <div className="header">
                <div className="left">
                    <img className='logo' src={logo} alt="" />
                </div>
                
                <div className='header__contact'>
                    <div className="address">
                        <img className='tel' src={tel} alt="tel" />
                        <img className='app' src={whatsapp} alt="whatsapp" />
                        <p>+996 502 01 95 59</p>

                    </div>
                    <div className="address">
                        <img className='map' src={map} alt="map" />
                        <span >г. Бишкек, ул. Юнусалиева 90</span>
                </div>
                

                </div>
                <div className="social-networks">
                <img className='social-instagram' src={instagram} alt="instagram" />
                <img className='social-instagram' src={facebook} alt="facebook" />
                </div>
            </div>
        </div> */}