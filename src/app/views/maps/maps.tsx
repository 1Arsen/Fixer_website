'use client'
import s from './maps.module.scss'
import { useMemo, useState } from 'react'

const MapsPage = () => {
  const [zoom, setZoom] = useState(16)

  return (
    <>
      <div className={s.map__container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.7632840922624!2d37.53400739895949!3d55.7502086920191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdc1a3c70b7%3A0x6a7f9f968e06e667!2sBashnya%20Federatsiya!5e1!3m2!1sen!2sru!4v1714084987869!5m2!1sen!2sru"
          width="330"
          height="330"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={s.map}
        ></iframe>
      </div>
    </>
  )
}

export default MapsPage
