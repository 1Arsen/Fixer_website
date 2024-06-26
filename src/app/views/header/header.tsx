import { NextPage } from 'next'
import s from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import HeaderMenuButtonPage from '@/app/components/headerMenu/headerMenuButton'

const HeaderPage: NextPage = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <span className={s.header__logo}>Repairer</span>
      </Link>
      <ul className={s.header__list}>
        <li>О компании</li>
        <li>Наши работы</li>
        <li>Организациям</li>
        <li>Контакты</li>
      </ul>
      <div className={s.header__phone}>
        <Image
          src="/icons/phone.svg"
          alt="phone"
          width={20}
          height={20}
          className={s.header__phone__image}
        />
        <span className={s.header__phone__number}>+7 937 138 44 40</span>
      </div>
      <div className={s.menu__container}>
        <HeaderMenuButtonPage  />
      </div>
    </header>
  )
}

export default HeaderPage
