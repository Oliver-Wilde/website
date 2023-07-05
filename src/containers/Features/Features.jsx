import React from 'react'
import './Features.css'


const Features = ( {title,text}) => {
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__feature-contaner__feature-'>
        <div/>
        <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container__feature-'>
        {text}
      </div>
    </div>
  )
}

export default Features