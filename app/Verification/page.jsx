'use client'
import React, { useState } from 'react'
import { Button } from '@nextui-org/button'

const page = () => {
  const [filePath, setFilePath] = useState('')

  return (
    <div className='mainBlock'>
      <h1 className='title'>Верификация документов</h1>
      <div className='verificationContainer'>
        <div className='verificationBlock'>
          <span>Вид документа удостоверяющие личность</span>
          <div className='inputFileWraper'>
            <div className="file-name">{filePath ? filePath : 'Выберите файл'}</div>
            <label htmlFor="file" className="file-label">
              Выберите файл
            </label>
            <input
              type="file"
              id="file"
              className="file-input"
              onChange={(e) => setFilePath(e.target.value)}
            />
          </div>
        </div>
        <div className='verificationBlock'>
          <span>Подпись</span>
          <div className='inputFileWraper'>
            <div className="file-name">{filePath ? filePath : 'Выберите файл'}</div>
            <label htmlFor="file" className="file-label">
              Выберите файл
            </label>
            <input
              type="file"
              id="file"
              className="file-input"
              onChange={(e) => setFilePath(e.target.value)}
            />
          </div>
        </div>
        <div className='verificationBlock'>
          <span>Заявление</span>
          <div className='inputFileWraper'>
            <div className="file-name">{filePath ? filePath : 'Выберите файл'}</div>
            <label htmlFor="file" className="file-label">
              Выберите файл
            </label>
            <input
              type="file"
              id="file"
              className="file-input"
              onChange={(e) => setFilePath(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button className='verifBtn'>Отправить</Button>
    </div>
  )
}

export default page