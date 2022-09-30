import React, { useEffect, useState } from 'react'
import { ResultadosLayout } from './ResultadosLayout'
import arrow from "../../assets/bx_arrow-back.svg"

export const Calculadora = ({resultados, setResultados}) => {

    const [presupuesto, setPresupuesto] = useState(0)
    

    const handleCalcular = (e) => {
        e.preventDefault()
        /* if (presupuesto <= 100000) {
            return
        } */
        setResultados(true)
    }


    return (
        <div className='right-box d-flex flex-column align-items-center justify-content-center'>
            {resultados && <img src={arrow} onClick={() => setResultados(false) } className="btn align-self-start text-focus-in" />}
            <h2 className='right-box__title'>¿QUÉ PRESUPUESTO TIENES PARA COMPRAR VIVIENDA?</h2>
            <h3 className='right-box__sub'>Inserta tu presupuesto total para comprar y remodelar</h3>
            <form className='m-4  w-75 d-flex flex-column align-items-center justify-content-center'>
                <div className="mb-3 d-flex align-items-center justify-content-center w-100">
                    <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                    <input type="number" className={`form-control p-3 fw-bold text-center`} min={0} placeholder='$_' id="exampleFormControlInput1" onChange={(e) => setPresupuesto(e.target.value)} disabled={resultados ? true : false} />
                </div>
                {!resultados && <button className='btn btn-vivvi' onClick={handleCalcular}>Calcular</button>}
                
            </form>

            {resultados && <ResultadosLayout presupuesto={presupuesto} />}
        </div>
    )
}
