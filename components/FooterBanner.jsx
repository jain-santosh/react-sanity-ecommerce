import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'


const FooterBanner = ({ footerBanner: { discount, largeText, largeText2, saleTime, smallText, midText, product, buttonText, image, desc } }) => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText}</h3>
          <h3>{largeText2}</h3>
          <h3>{saleTime}</h3>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href="#main" >
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img 
          src={urlFor(image)} 
          alt="" 
          className='footer-banner-image'
        />
      </div>
    </div>
  )
}

export default FooterBanner
