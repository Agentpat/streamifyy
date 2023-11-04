import React from 'react'
import './Button.css'

function Button({text}) {
  return (
    <div className='button__styles'>
        <h2 className='button__text'>
            {text}
        </h2>
    </div>
  )
}

export default Button