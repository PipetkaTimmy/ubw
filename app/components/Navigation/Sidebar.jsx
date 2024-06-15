import React from 'react'
import Link from 'next/link'
import BottomSide from './BottomSide'

const sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="topSide">
        <img src="/logo.png" alt="" className="logo" />
        <div className='linksWraper'>
          <Link href='/Profile' className="linkItem">
            <img src="/sidebar/profile.svg" alt="" />
            Профиль
          </Link>
          <Link href='/Queue' className="linkItem">
            <img src="/sidebar/queue.svg" alt="" />
            Очередь
          </Link>
          <Link href='/Documents' className="linkItem">
            <img src="/sidebar/docs.svg" alt="" />
            Документы
          </Link>
          <Link href='/Schedule' className="linkItem">
            <img src="/sidebar/chart.svg" alt="" />
            График
          </Link>
          <Link href='/Verification' className="linkItem">
            <img src="/sidebar/verification.svg" alt="" />
            Верификация документов
          </Link>
          <Link href='/Instructions' className="linkItem">
            <img src="/sidebar/instruction.svg" alt="" />
            Инструкции и заявления
          </Link>
          <Link href='/Payments' className="linkItem">
            <img src="/sidebar/payments.svg" alt="" />
            Мои платежи
          </Link>
          <Link href='/Vote' className="linkItem">
            <img src="/sidebar/vote.svg" alt="" />
            Голосование
          </Link>
        </div>
      </div>
      <BottomSide />
    </aside>
  )
}

export default sidebar