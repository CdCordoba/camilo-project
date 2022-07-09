import React from 'react'
import video from './abrahamVideo3.mp4'
import './styles.css';
const AOS = require("aos");

export default function Blog() {
    AOS.init();
    console.log(AOS)
    return (
        <div>
            <div className='video'
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="100">
                <div>
                    <h3>
                        Todo tiene solución menos la muerte.
                    </h3>
                    <p>Si estas mal en el <strong> amor, dinero o salud</strong>, solo haz tu consulta. Llámame y verás que mi trabajo es <strong>real y muy garantizado</strong>. Contamos con amarres de amor, eternos, sexuales y de atadura  En horas <strong>estamos haciendo la vida a las personas más fácil</strong>. venciendo las trabas y obstáculos que se les presenten.</p>
                </div>
                <video autoPlay={true} controls>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
