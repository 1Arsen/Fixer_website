import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import s from './footer.module.scss'
import MapsPage from '../maps/maps'
const FooterPage: NextPage = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer__main}>
        <div className={s.description__container}>
          <div className={s.header}>Наши контакты</div>
          <div className={s.text}>
            <span className={s.text_bald}>
              Будем рады видеть Вас в нашем офисе:
            </span>{' '}
            <br />
            Пресненская Набережная, 12, Москва, 123317
            <br />
            ПН - ПТ с 08:00 до 17:00 <br />
            <br />
            +7-937-138-44-40 <br />
            nnaaiillburdasov@gmail.com
          </div>
          <div className={s.link__container}>
            <Link href="https://www.instagram.com/bs_studio_dev/">
              <Image
                width="50"
                height="50"
                alt="social"
                src="/icons/icon1.svg"
                className={s.link__container__image}
              ></Image>
            </Link>
            <Link href="https://www.instagram.com/bs_studio_dev/">
              <Image
                width="50"
                height="50"
                alt="social"
                src="/icons/icon2.svg"
                className={s.link__container__image}
              ></Image>
            </Link>
            <Link href="https://www.instagram.com/bs_studio_dev/">
              <Image
                width="50"
                height="50"
                alt="social"
                src="/icons/icon3.svg"
                className={s.link__container__image}
              ></Image>
            </Link>
            <Link href="https://www.instagram.com/bs_studio_dev/">
              <Image
                width="50"
                height="50"
                alt="social"
                src="/icons/icon4.svg"
                className={s.link__container__image}
              ></Image>
            </Link>
            <Link href="https://www.instagram.com/bs_studio_dev/">
              <Image
                width="50"
                height="50"
                alt="social"
                src="/icons/icon5.svg"
                className={s.link__container__image}
              ></Image>
            </Link>
          </div>
        </div>
        <div className={s.map__container}>
          <MapsPage />
        </div>
      </div>
    </div>
  )
}

export default FooterPage
