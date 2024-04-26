import s from './slide.module.scss'
import Image from 'next/image'
import { IData } from '@/app/views/slider/slider'

export interface IDataForm {
  header: string
  buttonText?: string
  buttonStrongText?: string
  smallText?: string
}

const Slide1 = ({ data }: { data: IData }) => {
  //`url('/slide/slideCover.svg') left top no-repeat, linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), url('/images/${data.img}') right top no-repeat, lightgray 497px 3px / 91.18% 100.19% no-repeat`
  return (
    <>
      <div className={s.slide}>
        <div
          className={s.slide__background}
          style={{
            background: `linear-gradient(to left, rgba(255, 255, 255, 0.6) 0%, rgb(255, 255, 255) 100%), url('/images/${data.img}') right no-repeat, lightgray 497px 3px / 91.18% 100.19% no-repeat`,
          }}
        >
          <h1 className={s.slide__header}>
            <b>Ремонтируем {data.device}</b> в {data.city} или{' '}
            <b>возвращаем деньги </b> по договору.
          </h1>
          <div className={s.slide__adv__container}>
            <div className={s.slide__adv}>
              <Image
                src="/icons/done.svg"
                width={40}
                height={40}
                alt="done"
                className={s.slide__adv__image}
              />
              <span>
                Мы не просто мастерская, <b>мы компания - изобретатель</b>
              </span>
            </div>
            <div className={s.slide__adv}>
              <Image
                src="/icons/done.svg"
                width={40}
                height={40}
                alt="done"
                className={s.slide__adv__image}
              />
              <span>
                Разрабатываем и ремонтируем <b>более 28 видов техники</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slide1
