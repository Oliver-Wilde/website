import React from 'react'
import './Header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home" >Header
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing with GPT-3 OpenAi</h1>
        <p>Yada yada yada this is ollie being really lazy with the description and can't be arsed to think of something creative that relates to the wonderful technology of ai with this cool looking face to the right of this text.
          Testing if I can enter and just make a new line.
          okay yeah it works. sweet.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address: '></input>
          <button type="button">Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>1600+ people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
            <img src={ai} alt='ai' />
        </div>
    </div>
    
  )
}

export default Header