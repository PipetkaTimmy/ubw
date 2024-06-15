'use client'
import React, { useState, useMemo } from 'react'
import { Button } from '@nextui-org/react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";
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
        <div className='mainBlock'>
            <div className='flex justify-between'>
                <div className='statusBlock'>
                    <span>Статус голосования: <span className=''>Оконченно</span></span>
                    <span>Проголосовало: <b>2</b></span>
                    <h1 className='title'>Тема: Проверка удобства нового интерфейса</h1>
                </div>
                <Button className='rounded-none bg-white gap-1'>
                    <img src="/excel.svg" alt="" />
                    Экспортировать в Excel
                </Button>
            </div>
            <Table
                aria-label="Example table with client side pagination"
                bottomContent={
                    <div className="flex w-full justify-center">
                        <Pagination
                            isCompact
                            showControls
                            showShadow
                            color="secondary"
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
                    <TableColumn key="name">COOP</TableColumn>
                    <TableColumn key="role">Голос</TableColumn>
                    <TableColumn key="status">Дата начала голосования</TableColumn>
                    <TableColumn key="status">Дата окончания голосования</TableColumn>
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
    )
}

export default page