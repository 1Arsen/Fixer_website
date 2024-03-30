import MainForm from '@/app/components/forms/mainForm'
import { IDataForm } from '@/app/components/slides/slide1'
import { NextPage } from 'next'
import s from './remoterepair.module.scss'

const RemoteRepairPage = () => {
  return (
    <>
      <div className={s.main_form}>
        <MainForm
          dataForm={{
            header: 'Оставьте заявку и получите бесплатную диагностику прибора',
            buttonText: '',
            buttonStrongText: 'оставить заявку',
            smallText: 'Диагностика без последующего ремонта - 500₽',
          }}
        />
      </div>
    </>
  )
}

export default RemoteRepairPage
