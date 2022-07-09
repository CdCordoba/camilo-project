import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { RiWhatsappFill } from 'react-icons/ri'
import './styles.css'
const AOS = require("aos");

export default function Contact() {
    AOS.init()
    return (
        <div className='contact__container'
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-offset="100">
            <p>Soy experto en Amarres, unión de parejas y endulzamiento. Si tu ser Amado te ha dejado solo, buscame y te daré resultados en horas, mi trabajo es efectivo y garantizado.</p>
            <h2>Encuéntrame en estas plataformas</h2>
            <div className='contact__buttons'>
                <button className='buttonIcon'><ImFacebook2 size={23} className='icon fb' />Abraham De Los Reyes</button>
                <button className='buttonIcon'><RiWhatsappFill size={28} className='icon wsp' /> +54 11 2498-0838</button>
            </div>
        </div>
    )
}
