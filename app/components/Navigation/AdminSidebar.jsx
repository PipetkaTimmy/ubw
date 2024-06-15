import React from 'react'
import Link from 'next/link'

const AdminSidebar = () => {
    return (
        <aside className="sidebar">
            <div className="topSide">
                <img src="/logo.png" alt="" className="logo" />
                <div className='linksWraper'>
                    <Link href='/Admin/Users' className="linkItem">
                        <img src="/sidebar/payments.svg" alt="" />
                        Пайщики
                    </Link>
                    {/* <Link href='/Admin/Documents' className="linkItem">
                        <img src="/sidebar/docs.svg" alt="" />
                        Документы
                    </Link> */}
                    <Link href='/Admin/Queue' className="linkItem">
                        <img src="/sidebar/queue.svg" alt="" />
                        Очередь
                    </Link>
                    <Link href='/Admin/Vote' className="linkItem">
                        <img src="/sidebar/vote.svg" alt="" />
                        Голосование
                    </Link>
                    <Link href='/Admin/Notification' className="linkItem">
                        <img src="/sidebar/bell.svg" alt="" />
                        Уведомления
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export default AdminSidebar