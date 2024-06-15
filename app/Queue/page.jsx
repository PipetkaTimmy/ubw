'use client'
import React, { useState, useMemo } from 'react'
import { Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";
import { users } from '@/app/data/data'

const page = () => {

  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);


  return (
    <div className='mainBlock bgGray'>
      <div className='inputLabelHolder'>
        <span>Поиск по таблице</span>
        <Input type="email" placeholder="Введите COOP или ФИО" radius='none' size="lg" variant="bordered" />  
      </div>
      <div className='bgWhite mt-6'>
        <div className='radioButtons'>
          <Button radius="none" className='tabBtn'>В очереди</Button>
          <Button radius="none" className='tabBtn'>на оформлении</Button>
          <Button radius="none" className='tabBtn'>должник по документам</Button>
          <Button radius="none" className='tabBtn'>рассчитан</Button>
          <Button radius="none" className='tabBtn'>рассчитывающийся</Button>
          <Button radius="none" className='tabBtn'>рассчитывающийся</Button>
          <Button radius="none" className='tabBtn'>кандидат в очередь</Button>
          <Button radius="none" className='tabBtn'>накопитель</Button>
          <Button radius="none" className='tabBtn'>исключен</Button>
        </div>
        <Table
          aria-label="Example table with client side pagination"
          radius='none'
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper: "min-h-[222px]",
          }}
        >
          <TableHeader>
            <TableColumn key="key">№</TableColumn>
            <TableColumn key="coop">COOP</TableColumn>
            <TableColumn key="name">ФИО</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.name}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default page