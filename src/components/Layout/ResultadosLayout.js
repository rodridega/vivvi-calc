import React, { useEffect, useState } from 'react'
import { Resultado } from './Resultado'

export const ResultadosLayout = ({ presupuesto }) => {

    const [resultados, setResultados] = useState({
        vivienda: 0,
        ocultos: 0,
        remodelacion: 0
    })


    useEffect(() => {

        setResultados({
            vivienda: (presupuesto * 0.75).toFixed(2),
            ocultos: ((presupuesto * 0.75) * 0.0337).toFixed(2),
            remodelacion: ((presupuesto * 0.25) - (presupuesto * 0.75) * 0.0337).toFixed(2),
        })

    }, [presupuesto])


    return (
        <div className='row text-focus-in'>
            <Resultado h3={"COSTO DE VIVIENDA"} p={"Compra una vivienda de este monto"} total={`$ ${resultados.vivienda}`} />
            <Resultado h3={"COSTOS OCULTOS"} p={"Esto pagaras en gastos notariales y registro"} total={`$ ${resultados.ocultos}`} />
            <Resultado h3={"COSTO REMODELACIÓN"} p={"Nuestras remodelaciones completas equivalen al 25% del valor de la vivienda"} total={`$${resultados.remodelacion}`} />
        </div>
    )
}
