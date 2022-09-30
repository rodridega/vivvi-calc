import React, { useState } from 'react'
import { Calculadora } from './Calculadora'
import icon from "../../assets/casita.svg"
import wp from "../../assets/Vector.svg"

export const CalculadoraLayout = () => {

    const [resultados, setResultados] = useState(false)
    return (
        <div className='h-100 d-flex align-items-center justify-content-center  '>
            <div className='d-flex rounded'  >
                <div className='d-flex flex-column justify-content-evenly left-box' >
                    <div> <img src={icon} className="my-2" /> </div>
                    <div className='left-box__sub'>SIMULADOR DE INVERSIÓN PARA COMPRAR Y REMODELAR</div>
                    <div className={resultados ? "left-box__title-result" : "left-box__title"}>Accede a mayor área a menor precio</div>
                    {resultados ?
                        <>
                            <div className='left-box__text-result text-focus-in'>Compra tu inmueble inteligentemente, remodela con Vivvidero!</div>
                            <a href={"https://wa.me/573246147929"} target="_blank" type='button' className='btn btn-vivvi w-50 text-focus-in' ><img src={wp} className="mx-1" />
                                ¡QUIERO REMODELAR!</a>
                        </>
                        :
                        <div className='left-box__text'>Calcula el valor al que debes comprar para remodelar con vivvidero, sólo ingresando el área y el presupuesto que tienes disponible.</div>
                    }

                </div>
                <Calculadora resultados={resultados} setResultados={setResultados} />
            </div>
        </div>
    )
}
