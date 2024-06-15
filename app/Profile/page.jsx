'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '@nextui-org/input'
import { DatePicker } from "@nextui-org/date-picker";
import { getUserData, updateUserData } from '../services/user';
import {parseDate, getLocalTimeZone} from "@internationalized/date";

const page = () => {
  const [userData, setUserData] = useState({
    fio: '',
    username: '',
    date_of_birth: '',
    email: '',
    phone: '',
    citizenship: '',
    family_status: '',
    average_income: '',
    down_payment: '',
    type_of_document: '',
    num_doc: '',
    doc_issue_date: '',
    issuing_authority: '',
    doc_registred_address: '',
    object_region: '',
    object_type: '',
    object_total_area: '',
    object_estimated_cost: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUserData();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateUserData(userData);
      alert('Data updated successfully');
    } catch (error) {
      console.error("Failed to update user data", error);
      alert('Failed to update data');
    }
  };


  const [value, setValue] = React.useState(parseDate("2024-04-04"));

  let formatter = useDateFormatter({dateStyle: "full"});

  return (
    <div className="mainBlock">
      <h2 className="title">Общая информация</h2>
      <div className="infoContainer">
        <div className="infoInputWraper">
          <span>ФИО</span>
          <Input type="text" name="fio" variant="bordered" size="lg" radius="none" value={userData.fio} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>COOP</span>
          <Input type="text" name="username" variant="bordered" size="lg" radius="none" value={userData.username} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Дата рождения</span>
          {/* <DatePicker variant="bordered" size="lg" radius="none" name="birthdate" value={userData.date_of_birth}  onChange={date => setUserData(prevState => ({ ...prevState, birthdate: date }))}/> */}
          <DatePicker className="max-w-[284px]" label="Date (controlled)" value={value} onChange={setValue} />
        </div>

        <div className="infoInputWraper">
          <span>Электронный адрес</span>
          <Input type="text" name="email" variant="bordered" size="lg" radius="none" value={userData.email} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Номер телефона</span>
          <Input type="text" name="phone" variant="bordered" size="lg" radius="none" value={userData.phone} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Гражданство РК / Вид на жительство</span>
          <Input type="text" name="citizenship" variant="bordered" size="lg" radius="none" value={userData.citizenship} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Семейное положение</span>
          <Input type="text" name="family_status" variant="bordered" size="lg" radius="none" value={userData.family_status} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Средний доход за последние 6 месяцев</span>
          <Input type="text" name="average_income" variant="bordered" size="lg" radius="none" value={userData.average_income} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Источник первоначальных взносов</span>
          <Input type="text" name="down_payment" variant="bordered" size="lg" radius="none" value={userData.down_payment} onChange={handleChange} />
        </div>

        <div className='plank'>
          Документы
        </div>

        <div className="infoInputWraper">
          <span>Тип документа</span>
          <Input type="text" name="type_of_document" variant="bordered" size="lg" radius="none" value={userData.type_of_document} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Номер документа</span>
          <Input type="text" name="num_doc" variant="bordered" size="lg" radius="none" value={userData.num_doc} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Дата выдачи</span>
          <DatePicker variant="bordered" size="lg" radius="none" name="doc_issue_date" onChange={date => setUserData(prevState => ({ ...prevState, doc_issue_date: date }))} />
        </div>

        <div className="infoInputWraper">
          <span>Орган выдавший документ</span>
          <Input type="text" name="issuing_authority" variant="bordered" size="lg" radius="none" value={userData.issuing_authority} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Адрес регистрации</span>
          <Input type="text" name="doc_registred_address" variant="bordered" size="lg" radius="none" value={userData.doc_registred_address} onChange={handleChange} />
        </div>

        <div className='plank'>
          Недвижимость
        </div>

        <div className="infoInputWraper">
          <span>Желаемый регион приобретения объекта</span>
          <Input type="text" name="object_region" variant="bordered" size="lg" radius="none" value={userData.object_region} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Вид объекта недвижимости</span>
          <Input type="text" name="object_type" variant="bordered" size="lg" radius="none" value={userData.object_type} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Общая площадь (не менее м.кв)</span>
          <Input type="text" name="object_total_area" variant="bordered" size="lg" radius="none" value={userData.object_total_area} onChange={handleChange} />
        </div>

        <div className="infoInputWraper">
          <span>Ориентировочная стоимость</span>
          <Input type="text" name="object_estimated_cost" variant="bordered" size="lg" radius="none" value={userData.object_estimated_cost} onChange={handleChange} />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default page;
