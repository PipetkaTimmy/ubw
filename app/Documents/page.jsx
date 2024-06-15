import React from 'react'

const page = () => {
  return (
    <div className='pc-12'>
      <div className='bgWhite'>
        <h3 className='titleDoc'>Первичные документы</h3>
        <div className='docWraper'>
            <div className='docBlock'>
                <img src="/doc.svg" alt="" />
                <span>ЗАЯВЛЕНИЕ о приеме в члены ПК UBW</span>
            </div>
        </div>
      </div>
      <div className='bgWhite mt-6'>
        <h3 className='titleDoc'>Шаблоны заявлений</h3>
        <div className='docWraper'>
            <div className='docBlock'>
                <img src="/doc.svg" alt="" />
                <span>1. Заявление на выдачу справки о полной выплате пая, если более одного СООР от ДОВЕРЕННОГО ЛИЦА</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page