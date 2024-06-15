import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div className='mainBlock'>
            <h2 className='title'>15.05.2024</h2>
            <div className='voteAdminContainer'>
                <Link href="/Admin/VoteInfo" className='voteAdminBlock'>
                    <div className='flex gap-5'>
                        <img src="/sidebar/vote.svg" alt="" />
                        <span>Проверка удобства нового интерфейса</span>
                    </div>
                    <div className='flex gap-5'>
                        <span>Начало: 21.05.2024 | 12:32</span>
                        <span>Окончание: 22.05.2024 | 12:32</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default page