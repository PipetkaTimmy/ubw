import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='mainBlock'>
            <div className='flex justify-between items-center'>
                <h1 className='title'>Активные голосования</h1>
                <Link className='historyBtn' href='/Admin/History'>
                    <img src="/history.svg" alt="" />
                    Показать историю
                </Link>
            </div>
            <div className='voteAdminContainer'>
                <div className='voteAdminBlock'>
                    <div className='flex gap-5'>
                        <img src="/sidebar/vote.svg" alt="" />
                        <span>Проверка удобства нового интерфейса</span>
                    </div>
                    <div className='flex gap-5'>
                        <span>Начало: 21.05.2024 | 12:32</span>
                        <span>Окончание: 22.05.2024 | 12:32</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <Link href="/Admin/AddVote" className='addVote'>+</Link>
            </div>
        </div>
    )
}

export default page