import { NextPage } from 'next'
import s from './header.module.scss'

const HeaderJuniorPage: NextPage = () => {
  return (
    <div className={s.jun__container}>
      <ul className={s.jun__list}>
        <li className={s.jun__list__element}>Телевизоры</li>
        <li className={s.jun__list__element}>Ноутбуки</li>
        <li className={s.jun__list__element}>Компьютеры</li>
        <li className={s.jun__list__element}>Материнские платы</li>
        <li className={s.jun__list__element}>Кондиционеры</li>
        <li className={s.jun__list__element}>Стиралки</li>
        <li className={s.jun__list__element}>Посудомойки</li>
      </ul>
    </div>
  )
}

export default HeaderJuniorPage
