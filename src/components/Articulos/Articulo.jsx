import React from 'react'
import ButtonWsp from '../buttonWsp/ButtonWsp'
import './styles.css'
export default function Articulo({ img, titulo, texto, last }) {
    return (
        <div className='articulo' style={{ borderBottom: last && 'none' }}>
            <img src={img} alt="" />
            <h4>{titulo}</h4>
            <p>{texto} </p>
            <span style={{ display: 'flex', alignItems: 'center' }}>¿Te recuerda a tu situación? Hablemos<ButtonWsp /></span>

        </div>
    )
}
