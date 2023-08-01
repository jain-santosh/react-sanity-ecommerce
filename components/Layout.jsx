import React from 'react'
import Head from 'next/head'
import { Footer, Navbar } from '.'



const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Goat Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container" id="main">
        {children}
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
