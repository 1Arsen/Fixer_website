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
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5508.7343778821!2d37.53960494565551!3d55.749775310740056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sru!4v1714083107753!5m2!1sen!2sru"
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
