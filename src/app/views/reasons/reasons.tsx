import { NextPage } from 'next'
import Image from 'next/image'
import s from './reasons.module.scss'
const ReasonsPage: NextPage = () => {
  return (
    <div className={s.reasons}>
      <div className={s.reasons__container}>
        <div className={s.reasons__header}>
          Устраняем практически все виды неисправностей и поможем, если ваша
          техника:
        </div>
        <ul className={s.reasons__list}>
          <li className={s.reasons__list__element}>
            <Image
              className={s.reasons__list__image}
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
            ></Image>
            <span>Не включается</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Перезагружается</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Зависает</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Сильно греется</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Выдает ошибки</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Не реагирует на действия</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Сгорела материнская плата</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Издает посторонние шумы</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Не показывает изображение экрана</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Не работают индикаторы</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Вибрирует при работе</span>
          </li>
          <li className={s.reasons__list__element}>
            <Image
              src="/icons/cross.svg"
              height="25"
              width="25"
              alt="cross"
              className={s.reasons__list__image}
            ></Image>
            <span>Выдает коды ошибок</span>
          </li>
        </ul>
      </div>
      <div className={s.reasons__image__container}>
        <Image
          className={s.image}
          height={650}
          width={650}
          alt="Remont list"
          src="/images/foto.png"
        />
      </div>
    </div>
  )
}

export default ReasonsPage
