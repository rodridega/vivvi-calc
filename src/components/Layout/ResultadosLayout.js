import React, { useEffect, useState } from 'react'
import separator from '../../constants/separator'
import { WhatsappButton } from '../UI/WhatsappButton'
import { Resultado } from './Resultado'

export const ResultadosLayout = ({ presupuesto, resultados }) => {

    const [totales, setTotales] = useState({
        vivienda: 0,
        ocultos: 0,
        remodelacion: 0
    })

    

    useEffect(() => {

        setTotales({
            vivienda: separator(parseInt(presupuesto * 0.75)) ,
            ocultos: separator(parseInt((presupuesto * 0.75) * 0.0337)) ,
            remodelacion: separator(parseInt((presupuesto * 0.25) - (presupuesto * 0.75) * 0.0337)) ,
        })

    }, [presupuesto])


    return (
        <div className='d-flex flex-column flex-md-row text-focus-in'>
            <Resultado h3={"COSTO DE VIVIENDA"} p={"Este es el costo del inmueble que debes comprar."} total={`$${totales.vivienda}`} />
            <Resultado h3={"COSTOS OCULTOS"} p={"Esto pagaras en gastos notariales y registro"} total={`$${totales.ocultos}`} />
            <Resultado h3={"COSTO REMODELACIÓN"} p={"Tu remodelación equivale al 25% del valor de la vivienda."} total={`$${totales.remodelacion}`} />
            {resultados && <div className='d-md-none' >
                <WhatsappButton />
            </div>}
        </div>
    )
}
