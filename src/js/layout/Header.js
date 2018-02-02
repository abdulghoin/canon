// import Packages
import React from 'react'
import { IndexLink, Link } from 'react-router'

const Header = ({top_nav, right_nav}) => {
  return(
    <nav class='navbar'>
      <div class='container'>
        <div class='header'>
          <IndexLink
            to='/'
            class='brand'
          >
            <img src='/img/logo/canon-logo.png' alt='canon' />
          </IndexLink>

          <ul class='main-nav'>
            {
              top_nav.map(({title, link}, i) => (
                <li key={i}>
                  <Link to={link}>
                    {title}
                  </Link>
                </li>
              ))
            }
          </ul>

          <ul class='right-nav'>
            {
              right_nav.map(({title, link}, i) => (
                <li key={i}>
                  <Link class={i==0? 'active': ''} to={link}>
                    {title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
