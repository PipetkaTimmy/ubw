import React from 'react'
import { Button } from '@nextui-org/button'

const BottomSide = () => {
  return (
    <div className="bottomSide">
        <div className="bottomSideItem">
            <span>ФИО</span>
            <span>Иванов Иван Иванович</span>
        </div>
        <div className="bottomSideItem">
            <span>Логин</span>
            <span>COOP-20160313-003725-077</span>
        </div>
        <Button className="exitBtn">
            <img src="/sidebar/exit.svg" alt="" />
            Выход
        </Button>
    </div>
  )
}

export default BottomSide