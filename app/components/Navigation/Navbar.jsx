import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getUserData } from '@/app/services/user';

const Navbar = () => {
  const [pageTitle, setPageTitle] = useState();
  const [userData, setUserData] = useState(null);


  const router = usePathname();
  useEffect(() => {
    switch (router) {
      case '/Profile':
        setPageTitle('Профиль');
        break;
      case '/Documents':
        setPageTitle('Документы');
        break;
      case '/Instructions':
        setPageTitle('Инструкции и заявления');
        break;
      case '/Payments':
        setPageTitle('Мои платежи');
        break;
      case '/Queue':
        setPageTitle('Очередь');
        break;
      case '/Schedule':
        setPageTitle('График');
        break;
      case '/Verification':
        setPageTitle('Верификация документов');
        break;
    }
  }, [router])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (err) {
        console.log('Ошибка получения данных пользователя.');
      }
    };

    fetchData();
  }, []);



  return (
    <div className="navbar">
      <span>
      {pageTitle}
      </span>
    </div>
  )
}

export default Navbar