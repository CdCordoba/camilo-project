import React from 'react'
import './styles.css'
import image from './background.jpg';
export default function Landing() {
    return (
        <div className='container__landing'>
            <div className='title__landing'>
                <h1>Abraham <br /> De Los Reyes</h1>
                <div>
                    <em>
                        <p>Tienes mala suerte en el amor, dinero y salud. Haz tu pregunta y te ayudaré a salir adelante.</p>

                        <p> Unión de parejas, saladuras, tienes hecho una brujería, magia negra o cualquier maldad, estoy para servirte.</p>
                    </em>
                </div>
            </div>
            <img src={image} alt="image" />
        </div>
    )
}
