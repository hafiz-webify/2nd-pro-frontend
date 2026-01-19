import React from 'react'

function GridProduct(props) {
  return (
    <div>
      <img className='pt-5' src={props.imgUrl}/>
      <button className='ms-5'>{props.title}</button>
    </div>
  )
}

export default GridProduct
