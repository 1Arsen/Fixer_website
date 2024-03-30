'use client'
import { NextPage } from 'next'
import { useOutside } from '@/hooks/useOutside'
import s from './headerMenuButton.module.scss'
import cn from 'classnames'
import Image from 'next/image'

const HeaderMenuButtonPage: NextPage = () => {
  const { ref, isShow, setIsShow } = useOutside(false)
  return (
    <div className={s.parent} ref={ref}>
      <button
        onClick={() => setIsShow(!isShow)}
        className={cn({ [s.active]: isShow })}
      >
        <Image
          src="/icons/menu.svg"
          width={20}
          height={20}
          alt="menu"
          className={s.menu__button}
        ></Image>
      </button>
      {isShow && (
        <ul className={s.article}>
          <li>О компании</li>
          <li>Наши работы</li>
          <li>Организациям</li>
          <li>Контакты</li>
        </ul>
      )}
    </div>
  )
}

export default HeaderMenuButtonPage
