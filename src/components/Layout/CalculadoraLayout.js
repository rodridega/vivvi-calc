import React, { useState } from 'react'
import { Calculadora } from './Calculadora'
import icon from "../../assets/casita.svg"
import { WhatsappButton } from '../UI/WhatsappButton'

export const CalculadoraLayout = () => {

    const [resultados, setResultados] = useState(false)
    return (
        <div className='h-100 d-flex align-items-center justify-content-center  '>
            <div className='d-flex flex-column flex-md-row'  >
                <div className='d-flex flex-column justify-content-between justify-content-md-evenly left-box' >
                    <div> <img src={icon} className="my-2" alt='home'/> </div>
                    <div className='left-box__sub'>SIMULADOR DE INVERSIÓN PARA COMPRAR Y REMODELAR</div>
                    <div className={resultados ? "left-box__title-result" : "left-box__title"}>
                        <p>Accede a mayor área</p>
                        <p>a menor precio</p> </div>
                    {resultados ?
                        <div className='d-none d-md-block'>
                            <div className=' left-box__text-result text-focus-in '>Compra tu inmueble inteligentemente, remodela con Vivvidero!</div>
                            <WhatsappButton />
                        </div>
                        :
                        <div className='left-box__text'>Calcula el valor al que debes comprar para remodelar con vivvidero, sólo ingresando el área y el presupuesto que tienes disponible.</div>
                    }
                    {resultados && <div className='left-box__text d-md-none'>Calcula el valor al que debes comprar para remodelar con vivvidero, sólo ingresando el área y el presupuesto que tienes disponible.</div>}
                </div>
                <Calculadora resultados={resultados} setResultados={setResultados} />
            </div>
        </div>
    )
}
