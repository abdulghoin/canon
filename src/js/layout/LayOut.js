// import Packages
import React from 'react'
import { isBrowser } from 'react-device-detect'

// import Components
// import Header from './Header'
import Header from 'Header'
import Footer from 'Footer'
import MobileMenu from 'MobileMenu'

const LayOut =({children})=>{
  let top_nav = [
    {
      title: 'Products',
      link: '#'
    },
    {
      title: 'Articles',
      link: '#'
    },
    {
      title: 'Events',
      link: '#'
    },
    {
      title: 'Courses',
      link: '#'
    },
    {
      title: 'Contact',
      link: '#'
    },
    {
      title: 'Promotion',
      link: '#'
    },
    {
      title: 'Search',
      link: '#'
    }
  ]

  let right_nav = [
    {
      title: 'Consumer',
      link: '#'
    },
    {
      title: 'Business',
      link: '#'
    }
  ]

  return(
    <section id='LayOut'>
      {
        isBrowser ?
        <Header
          top_nav={top_nav}
          right_nav={right_nav}
        /> :
        <MobileMenu
          top_nav={top_nav}
          right_nav={right_nav} 
        />
      }
      <div>
        {children}
      </div>
      <Footer />
    </section>
  )
}

export default LayOut
