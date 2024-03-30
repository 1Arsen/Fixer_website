import { NextPage } from 'next'
import s from './home.module.scss'
import SliderPage from '../views/slider/slider'
import HeaderJuniorPage from '../views/header/headerJunior'
import UnderSlidePage from '../views/underSlide/underSlide'
import TeknikaPage from '../views/teknika/teknika'
import MinPricePage from '../views/minPrice/minPrice'
import ReasonsPage from '../views/reasons/reasons'
import RemoteRepairPage from '../views/remoteRepair/remoteRepair'
import MainForm from '../components/forms/mainForm'

const HomePage: NextPage = () => {
  return (
    <div className={s.home}>
      <main className={s.main}>
        <HeaderJuniorPage />
        <SliderPage />
        <UnderSlidePage />
        <TeknikaPage />
        <MinPricePage />
        <ReasonsPage />
        <RemoteRepairPage />
      </main>
    </div>
  )
}

export default HomePage
