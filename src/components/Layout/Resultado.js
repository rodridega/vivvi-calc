import React from 'react'

export const Resultado = ({ h3, p, total }) => {
  return (
    <div className='col d-flex flex-md-column justify-content-between justify-content-md-between align-items-md-center w-100'>
      <div className='w-md-100 text-start text-md-center'>
        <h3 className='resultado__title'>{h3}</h3>
        <p className='resultado__sub'>{p}</p>
      </div>
      <div className='resultado__total d-flex justify-content-center align-items-center'>
       {total}
      </div>
    </div>
  )
}
