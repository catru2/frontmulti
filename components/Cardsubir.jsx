import React from 'react'
import Img from 'next/image'
import subir from '../public/assets/boton1.png'
import Labellogin from './Labellogin';
function Cardsubir() {
  return (
        <div className='contenedor_img_subir'>
     <Img src={subir} className='card_subir' />
    </div>
  )
}

export default Cardsubir;