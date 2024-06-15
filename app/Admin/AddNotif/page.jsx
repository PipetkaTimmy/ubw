'use client'
import React, { useState } from 'react'
import { Input, DatePicker, CheckboxGroup, Checkbox, Button } from '@nextui-org/react'

const page = () => {
    return (
        <div className='mainBlock'>
            <div>
                <Input
                    type="text"
                    label="Введите заголовок"
                    labelPlacement="outside"
                    radius="none"
                    size='lg'
                />
                <Input
                    type="text"
                    label="Введите текст"
                    labelPlacement="outside"
                    radius="none"
                    size='lg'
                />
                <div className='flex gap-6 mt-6'>
                    <DatePicker label="Дата начала" radius='none' />
                    <DatePicker label="Дата окончания" radius='none' />
                </div>
                <CheckboxGroup
                    label="Выберите кто получит уведомления"
                    // defaultValue={["buenos-aires", "london"]}
                    className='mt-6'
                >
                    <Checkbox radius='none' className='checkboxItem' value="0">Члены кооператива</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="1">Пайщики</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="2">Кандидаты в очередь</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="3">Очередь</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="4">На оформлении</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="5">Рассчитывающиеся</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="6">Полностью рассчитавшиеся</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="7">Должники по взносам</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="8">Должники по документам</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="9">Исключенные</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="10">Ваш профиль заблокирован</Checkbox>
                    <Checkbox radius='none' className='checkboxItem' value="11">Кандидат</Checkbox>
                </CheckboxGroup>
            </div>
        </div>
    )
}

export default page