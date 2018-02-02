import React from 'react'
import { Link } from 'react-router'
import { isBrowser } from 'react-device-detect'

import FooterColumn from 'FooterColumn'

const Footer = () => {
  let footer = [
    {
      title: 'Company',
      list: [
        {
          link: '#',
          link_title: 'About Us'
        },
        {
          link: '#',
          link_title: 'Press Room'
        },
        {
          link: '#',
          link_title: 'Term of Use'
        },
        {
          link: '#',
          link_title: 'Privacy Police'
        },
        {
          link: '#',
          link_title: 'Careers'
        },
        {
          link: '#',
          link_title: 'FAQ'
        }
      ]
    },
    {
      title: 'Products',
      list: [
        {
          link: '#',
          link_title: 'Support & Downloads'
        },
        {
          link: '#',
          link_title: 'Where to buy'
        }
      ]
    },
    {
      title: 'Services',
      list: [
        {
          link: '#',
          link_title: 'Service & Repair'
        },
        {
          link: '#',
          link_title: 'EOS 1 Club'
        },
        {
          link: '#',
          link_title: 'Canon Professional Services'
        }
      ]
    },
    {
      title: 'Warrantly',
      list: [
        {
          link: '#',
          link_title: 'Registration'
        },
        {
          link: '#',
          link_title: 'Product Warrantly'
        },
        {
          link: '#',
          link_title: 'Information for tourist'
        }
      ]
    },
    {
      title: 'Related Websites',
      list: [
        {
          link: '#',
          link_title: 'Microsites'
        }
      ]
    }
  ]
  return (
    <footer>
      <div class='container'>
        <div class='row'>
          {
            footer.map((item, i) => (
              <FooterColumn key={i} item={item} />
            ))
          }
          <div class={`col subscribe ${isBrowser? 'col-md-2' : 'col-sm-12'}`}>
            <h5 class='title'>Subscribe</h5>
            <ul class='detail'>
              <li><Link to='#'><i class="fab fa-facebook-f"></i></Link></li>
              <li><Link to='#'><i class="fab fa-instagram"></i></Link></li>
              <li><Link to='#'><i class="fab fa-youtube"></i></Link></li>
              <li><Link to='#'><i class="fab fa-twitter"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div class='container copyright'>
        <div class='row'>
          <div class={`col ${isBrowser?'col-md-6':'col-sm-12 text-center'}`}>
            <p>Copyright 1017 Canon. All rights reserved.</p>
          </div>

          <div class={`col ${isBrowser?'col-md-6 text-right':'col-sm-12 text-center'}`}>
            Singapore
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
