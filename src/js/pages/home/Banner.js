import React from 'react'
import { Link } from 'react-router'
import { Carousel } from 'react-responsive-carousel'

const Banner = () => {
  let banners = [
    {
      img: '/img/bg/banner_1.jpg',
      desc: {
        main: 'Great Singapore Sale 2017',
        second: '9 June -13 August',
        button: {
          link: '#',
          title: 'Find a deal'
        }
      }
    },
    {
      img: '/img/bg/banner_2.jpg',
      desc: {
        main: 'Great Singapore Sale 2018',
        second: '19 June -23 August',
        button: {
          link: '#',
          title: 'Find a deal'
        }
      }
    },
    {
      img: '/img/bg/banner_3.jpg',
      desc: {
        main: 'Great Singapore Sale 2019',
        second: '1 June -30 August',
        button: {
          link: '#',
          title: 'Find a deal'
        }
      }
    }
  ]
  return (
    <section class='banner'>
      <Carousel showThumbs = {false} autoPlay={ true } infiniteLoop = { true }>
        {
          banners.map(({img, desc: {main, second, button: {link, title}}}, i) => (
            <div key={i}>
              <img src={img}/>
              <div class='content'>
                <h1>{main}</h1>
                <h2>{second}</h2>
                <Link class='btn btn-red' to={link}>{title}</Link>
              </div>
            </div>
          ))
        }
      </Carousel>
    </section>
  )
}


export default Banner
