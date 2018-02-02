import React, { Component } from 'react'
import { isBrowser } from 'react-device-detect'
import { Link } from 'react-router'

class FooterColumn extends Component {
  constructor() {
    super()
    this.state = {
      open : false
    }
  }

  toggle = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    let {item: { title, list }} = this.props
    let {open} = this.state
    return (
      <div class={`col ${isBrowser? 'col-md-2' : 'col-sm-12'}`}>
        <h5 class='title' onClick={this.toggle}>{title}</h5>
        <ul class={`detail ${open? 'show':''}`}>
          {
            list.map(({link, link_title}, i) => (
              <li key={i}><Link to={link}>{link_title}</Link></li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default FooterColumn
