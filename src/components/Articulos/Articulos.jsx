import React from 'react'
import Articulo from './Articulo'
import './styles.css'
export default function Articulos() {
    const amarres = {
        sexual: 'Con tu pareja o tu ser amado siempre se sentirán unidos y disfrutarán de una intimidad apasionada y excitante.',
        temporal: 'La persona que deseas te encontrará buscará a ti por un tiempo determinado o limitado.',
        eternos: 'Este fuerte ritual nos va a garantizar que tu pareja nunca se vaya y nunca se fije en nadie más que tú. Nadie más va a existir en la vida de ustedes y no podrán interferir terceras personas'
    }
    return (
        <div className='articulos__container'>
            <h2>Amarres</h2>
            <Articulo img="https://media.baamboozle.com/uploads/images/43643/1654062487_36318_url.jpeg" texto={amarres.eternos} titulo='Amarre eterno' />
            <Articulo img="https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2019/10/las-parejas-perfectas-tambien-terminan.jpg" texto={amarres.temporal} titulo='Amarre temporal' />
            <Articulo img="https://media.gq.com.mx/photos/5d94c04a9e3c2f0008436964/master/w_1600%2Cc_limit/GettyImages-641831648.jpg" texto={amarres.sexual} titulo='Amarre sexual' last={true} />

        </div>
    )
}
