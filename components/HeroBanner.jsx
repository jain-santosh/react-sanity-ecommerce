import Link from 'next/link'
import React from 'react'

import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner, products }) => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className="beats-solo">{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText}</h1>
                <h1>{heroBanner.largeText2}</h1>
                <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image' />
                <Link href="#main">
                    <button type="button">{heroBanner.buttonText}</button>
                </Link>
                <div>
                    <div className="desc">
                        <p>{heroBanner.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
