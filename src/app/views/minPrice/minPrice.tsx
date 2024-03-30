import { NextPage } from 'next'
import s from './minPrice.module.scss'
const MinPricePage: NextPage = () => {
  return (
    <div className={s.min_price__container}>
      <div className={s.min_price}>
        <div className={s.min_price__header}>
          Работаем со всеми известными марками техники. Часть неисправностей
          реанимируем удаленно!
        </div>
        <span className={s.min_price__price}>
          Минимальная стоимость ремонта - 1500₽
        </span>
      </div>
    </div>
  )
}

export default MinPricePage
