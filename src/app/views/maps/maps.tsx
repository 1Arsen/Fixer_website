'use client'
import { NextPage } from 'next'
import Script from 'next/script'
import s from './maps.module.scss'
import { YMaps, Map } from 'react-yandex-maps'
import { useMemo, useState } from 'react'

const MapsPage = () => {
  const [zoom, setZoom] = useState(16)
  const mapState = useMemo(
    () => ({ center: [46.3745228, 48.0504233], zoom }),
    [zoom]
  )
  return (
    <>
      <div className={s.map__container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1948.3006025024863!2d48.01958950838573!3d46.32347708338239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a90fbf5b902b53%3A0xb04495fe828b0d17!2z0YPQuy4g0JHQvtC10LLQsNGPIDEt0Lkg0L_RgC3QtCwg0JDRgdGC0YDQsNGF0LDQvdGMLCDQkNGB0YLRgNCw0YXQsNC90YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCA0MTQwMjQ!5e0!3m2!1sru!2suk!4v1709978637345!5m2!1sru!2suk"
          width="330"
          height="330"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className={s.map}
        ></iframe>
      </div>
    </>
  )
}

export default MapsPage
