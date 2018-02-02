// import Packages
import React from 'react'
import Helmet from 'react-helmet'
import { isBrowser } from 'react-device-detect'
import { Link } from 'react-router'

import Banner from './Banner'

const Home = () => {
  let new_products = [
    {
      img: '/img/products/powershot-g1x-mark-iii-front-d.png',
      title: 'Powershot G1X Mark III',
      link: '/'
    },
    {
      img: '/img/products/powershot-g1x-mark-iii-front-d.png',
      title: 'Powershot G1X Mark III',
      link: '/'
    },
    {
      img: '/img/products/powershot-g1x-mark-iii-front-d.png',
      title: 'Powershot G1X Mark III',
      link: '/'
    }
  ]

  return (
    <section id='home'>
      <Helmet title='Home' />
      <Banner />

      <div class='container'>
        <div class='new row'>
          {
            new_products.map(({img, title, link}, i) => (
              <div key={i} class={`col ${isBrowser? 'col-md-4' : 'col-sm-12'} text-center`}>
                <Link to={link} class='item'>
                  <span class='tag-label red'>New</span>
                  <img src={img} />
                  <h4>{title}</h4>
                </Link>
              </div>
            ))
          }
        </div>

        <div class='promotion'>
          <div class={`content ${isBrowser? 'desktop' : 'mobile'}`}>
            <span class='tag-label red'>Promotion</span>
            <img class={`${isBrowser? '' : 'mobile'}`} src='/img/products/powershot-g1x-mark-iii-front-d.png' />

            <div class={`desc ${isBrowser? '' : 'mobile'}`}>
              <h4>EOS 6D Mark III</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div class={isBrowser? '': 'text-right'}>
                <Link to='#' class='btn btn-red'>
                  View product
                </Link>
              </div>
            </div>
          </div>

          <div class={isBrowser? 'text-right': ''}>
            <Link to='#' class='btn btn-white'>
              <span class='flex-align-center'>
                <span>
                  View all products
                </span>
                <i class="material-icons">&#xE315;</i>
              </span>
            </Link>
          </div>
        </div>

        <div class='article'>
          <h2 class={`title ${isBrowser? '' : 'mobile'}`}>
            Articles
          </h2>

          <div class={`content ${isBrowser? 'desktop' : 'mobile'}`}>
            <span class='tag-label grey'>Product</span>
            <img class={`${isBrowser? '' : 'mobile'}`} src='/img/products/powershot-g1x-mark-iii-front-d.png' />

            <div class={`desc ${isBrowser? '' : 'mobile'}`}>
              <h4>EOS 6D Mark III</h4>
              <p class='text-justify'>
                <b>12 September 2017 - </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div class={isBrowser? '': 'text-right'}>
                <Link to='#' class='btn btn-red'>
                  View product
                </Link>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class={`col ${isBrowser? 'col-md-8': 'col-sm-12'}`}>
              <div class='content-nd'>
                <span class='tag-label grey'>General</span>
                <div class='img'>
                  <img src='/img/bg/banner_2.jpg' />
                </div>
                <div class='desc'>
                  <h4>Canon Photo Marathon 2017</h4>
                  <p class='text-justify'>
                    <b>12 September 2017 - </b>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            <div class={`col ${isBrowser? 'col-md-4': 'col-sm-12'}`}>
              <div class='content-nd'>
                <span class='tag-label grey'>Tips & tutorial</span>
                <div class='img'>
                  <img src='/img/bg/banner_2.jpg' />
                </div>
                <div class='desc'>
                  <h4>Canon Photo Marathon 2017</h4>
                  <b>12 September 2017</b>
                </div>
              </div>
            </div>
          </div>

          <div class={isBrowser? 'text-right': ''}>
            <Link to='#' class='btn btn-white'>
              <span class='flex-align-center'>
                <span>
                  View all articles
                </span>
                <i class="material-icons">&#xE315;</i>
              </span>
            </Link>
          </div>
        </div>

        <div class='event'>
          <h2 class={`title ${isBrowser? '' : 'mobile'}`}>
            Events
          </h2>

          <div class={`content ${isBrowser? 'desktop' : 'mobile'}`}>
            <span class='tag-label grey'>Event</span>
            <img class={`${isBrowser? '' : 'mobile'}`} src='/img/bg/banner_2.jpg' />

            <div class={`desc ${isBrowser? '' : 'mobile'}`}>
              <h4>EOS 6D Mark III</h4>
              <p class='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div class={isBrowser? '': 'text-right'}>
                <Link to='#' class='btn btn-red'>
                  View product
                </Link>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class={`col ${isBrowser? 'col-md-8': 'col-sm-12'}`}>
              <div class='content-nd'>
                <span class='tag-label grey'>Travel</span>
                <div class='img'>
                  <img src='/img/bg/banner_2.jpg' />
                </div>
                <div class='desc'>
                  <h4>Canon Photo Marathon 2017</h4>
                  <p class='text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>

            <div class={`col ${isBrowser? 'col-md-4': 'col-sm-12'}`}>
              <div class='content-nd'>
                <span class='tag-label grey'>Workshops</span>
                <div class='img'>
                  <img src='/img/bg/banner_2.jpg' />
                </div>
                <div class='desc'>
                  <h4>Canon Photo Marathon 2017</h4>
                  <p class='text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class={isBrowser? 'text-right': ''}>
            <Link to='#' class='btn btn-white'>
              <span class='flex-align-center'>
                <span>
                  View all events
                </span>
                <i class="material-icons">&#xE315;</i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
