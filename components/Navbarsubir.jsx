import React from 'react'
import "./Estilos.css"
import Boton from 'next/image';
import Logo from 'next/image';
import logo from "../public/assets/logowe.png"
import boton1 from "../public/assets/boton2.png"
import boton2 from "../public/assets/boton3.png"
import InputInicio from './InputInicio';
import Img from 'next/image'
import Lupa from "../public/assets/lupa.png"
function NavbarSubir() {
  return (
    <div className='contenedor_navbar'>
      <div className='contenedor_imagenes_iconos_barra'>
      <div className='contenedor_botones_logo_busqueda'>
      <div className='busqueda'>
        <InputInicio tipo="barra"/> 
        <Img src={Lupa} className='lupa'/>
      </div>
     
      </div>
      </div>
      <div className='contenedor_imagenes_iconos_barra'>
        <div className='contenedor_botones_logo_busqueda'>
           <Logo src={logo} className='logo'/>
           
        </div>
      </div>
      
   
      <div className='contenedor_imagenes_iconos_barra'>
        <div className='contenedor_botones_logo_busqueda'>
      <Boton src={boton1} className='boton1'/>
      <Boton src={boton2} className='boton1'/>
        </div>
      </div>
    </div>
  )
}

export default NavbarSubir;