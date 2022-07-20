import React from 'react'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo.png'
import map from '../../assets/map.png'
import tel from '../../assets/tel.png'
import whatsapp from '../../assets/whatsapp.png'
import '../navmenu/NavMenu.css'
import './Headfoot.css'

export default function Headfoot() {
	return (
		<div className='header' id='header'>
			<div className='container2'>
				<div className='header__inner'>
					<a href="" className="header__logo2"><img src={logo} alt="logo" className='logo-10'/></a>
					<div className="header__contact contact-header">
						<div className="contact-header__ite2">
							<img src={tel} alt="tel" className='tel' />
							<a  target='_blank' href="https://api.whatsapp.com/send?phone=996502019559" rel="noreferrer" ><img src={whatsapp} alt="whatsapp"  className='whats'/></a>
							<span className='span2'>+996 502 01 95 59</span>
						</div>
						<div className="contact-header__ite3">
							<img src={map} alt="map" className='map'/>
							<span className='bishkek'>г. Бишкек, ул. Юнусалиева 90 </span>
						</div>
					</div>
					<div class="header__social2 social-header">
					<a target='_blank' href="https://instagram.com/kmpcentralasia?igshid=YmMyMTA2M2Y= " className='social-header__item2' rel="noreferrer"><img  src={instagram} alt="instagram"  className='instagram'/></a>
						<a target='_blank' href="https://www.facebook.com/gerflor.bishkek/" rel="noreferrer"><img  className='social-header__item'  src={facebook} alt="facebook" /></a>

					</div>
				</div>
				
			</div>
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
	   
	   
		</div>
	);
}

