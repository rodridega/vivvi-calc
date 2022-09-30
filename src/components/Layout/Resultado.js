import React from 'react'

export const Resultado = ({ h3, p, total }) => {
  return (
    <div className='col d-flex flex-column justify-content-between'>
      <h3 className='resultado__title'>{h3}</h3>
      <p className='resultado__sub'>{p}</p>
      <div className='resultado__total'>{total}</div>
    </div>
  )
}
