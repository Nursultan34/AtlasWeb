import React from 'react'
import './delivery.css'


export const Deliveryblock = () => {
    return (
        <div >
            <div className='delivery'>

                <div className="black-container">
                    <h2>Доставка</h2>
                    <p className='p-desc'>Поможем подобрать логистическую компанию для доставки в Узбекистан, Казахстан, Таджикистан, Украину, Молдову, Беларусь и Россию. Чтобы заказать срочную доставку или альтернативные способы доставки, напишите свои пожелания в комментариях во время заказа.</p>

                    <button className='delivery-button'><a href="https://api.whatsapp.com/send?phone=996502019559">Заказать доставку</a></button>
                </div>

            </div>
        </div>

    )
}
