import React, { Component } from 'react'
import { Link } from 'react-router'

class MobileMenu extends Component {
  constructor() {
    super()
    this.state = {
      menu: false
    }
  }

  toggleMenu = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {
    let {menu} = this.state
    let {top_nav, right_nav} = this.props
    // let navs = top_nav.concat(right_nav)
    if (menu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return (
      <section id='mobile-menu'>
        <span class='burger-button' onClick={this.toggleMenu}>
          <i class="fas fa-bars"></i>
        </span>

        <div class={`menu ${menu? 'show':''}`}>
          <div class='top'>
            <img src='/img/logo/canon-logo.png' alt='canon' />
            <span class='close' onClick={this.toggleMenu}>
              <i class="far fa-window-close"></i>
            </span>
          </div>
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

          <ul class='nd-nav'>
            {
              right_nav.map(({title, link}, i) => (
                <li key={i}>
                  <Link class={i==0?'active':
                  ''} to={link}>
                    {title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    )
  }
}

export default MobileMenu
