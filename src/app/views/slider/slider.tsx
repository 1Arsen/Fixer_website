'use client'
import { NextPage } from 'next'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Slide1 from '@/app/components/slides/slide1'

export interface IData {
  device: string
  city: string
  img: string
}

register()
const SliderPage: NextPage = () => {
  return (
    <>
      <Swiper
        className="swiper-container"
        style={{
          marginBottom: 10,
          boxShadow: '0px 10px 10px -5px rgba(0, 0, 0, 0.25)',
        }}
        loop={true}
        speed={500}
        pagination={{
          type: 'bullets',
          clickable: true,
          bulletClass: 'swiper-pagination',
        }}
        autoplay={true}
      >
        <SwiperSlide className="swiper-slide">
          <Slide1
            data={{ device: 'телевизоры', city: 'Москве', img: 'tv.png' }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide1
            data={{ device: 'ноутбуки', city: 'Москве', img: 'notebook.png' }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide1
            data={{ device: 'мониторы', city: 'Москве', img: 'monitor.png' }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide1
            data={{ device: 'компьютеры', city: 'Москве', img: 'pc.png' }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide1
            data={{
              device: 'стиральные машины',
              city: 'Москве',
              img: 'wash.png',
            }}
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Slide1
            data={{
              device: 'посудомоечные машины',
              city: 'Москве',
              img: 'dishwash.png',
            }}
          />
        </SwiperSlide>
        <div className="swiper-pagination">
          <span>Телевизоры</span>
          <span>Ноутбуки</span>
        </div>
      </Swiper>
    </>
  )
}

export default SliderPage
