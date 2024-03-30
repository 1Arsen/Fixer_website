import { NextPage } from 'next'
import Image from 'next/image'
import s from './teknika.module.scss'
const TeknikaPage: NextPage = () => {
  return (
    <div className={s.teknika}>
      <span className={s.teknika__text}>
        Ремонтируем технику оригинальными комплектующими из Европы, США, Китая
      </span>
      <Image
        src="/vectors/vector.svg"
        width={200}
        height={30}
        alt="vector"
        className={s.teknika__image}
      />
    </div>
  )
}

export default TeknikaPage
