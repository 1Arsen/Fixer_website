import { NextPage } from 'next'
import Image from 'next/image'
import s from './underSlide.module.scss'
const UnderSlidePage: NextPage = () => {
  return (
    <div className={s.underSlide}>
      <div className={s.underSlide__elem}>
        <Image
          src="/underSlide/icon 1.svg"
          alt="icon1"
          width={40}
          height={40}
          className={s.underSlide__img}
        ></Image>
        <span className={s.underSlide__text}>
          Используем комплектующие из Европы, Китая, США
        </span>
      </div>
      <div className={s.underSlide__elem}>
        <Image
          src="/underSlide/icon 2.svg"
          alt="icon2"
          width={40}
          height={40}
          className={s.underSlide__img}
        ></Image>
        <span className={s.underSlide__text}>
          Не накручиваем стоимость за выдуманные «болячки»
        </span>
      </div>
      <div className={s.underSlide__elem}>
        <Image
          src="/underSlide/icon 3.svg"
          alt="icon3"
          width={40}
          height={40}
          className={s.underSlide__img}
        ></Image>
        <span className={s.underSlide__text}>
          Работаем даже с безнадежными случаями
        </span>
      </div>
      <div className={s.underSlide__elem}>
        <Image
          src="/underSlide/icon 4.svg"
          alt="icon4"
          width={40}
          height={40}
          className={s.underSlide__img}
        ></Image>
        <span className={s.underSlide__text}>
          Даем гарантию на работы до 12 месяцев
        </span>
      </div>
    </div>
  )
}

export default UnderSlidePage
