import React from 'react'
import { AiFillInstagram , AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-container">
        <p>2023 SoundSonic Headphones. All Rights Reserved. Developed By Santosh Jain</p>
        <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
    </div>
  )
}

export default Footer
