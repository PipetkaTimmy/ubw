'use client'
import React, {useState} from 'react'
import { Input, DatePicker, Accordion, AccordionItem, Button } from '@nextui-org/react'

const page = () => {
    const [questions, setQuestions] = useState([{ id: 1, title: '' }]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { id: questions.length + 1, title: '' }]);
    };

    const handleInputChange = (id, value) => {
        setQuestions(questions.map(question =>
            question.id === id ? { ...question, title: value } : question
        ));
    };

    const handleSubmit = () => {
        console.log(questions);
    };

    return (
        <div className='mainBlock'>
            <div>
                <Input
                    type="text"
                    label="Введите название темы"
                    labelPlacement="outside"
                    radius="none"
                    size='lg'
                />
                <div className='flex gap-6 mt-6'>
                    <DatePicker label="Дата начала" radius='none' />
                    <DatePicker label="Дата окончания" radius='none' />
                </div>
                <Accordion className='bg-gray-100 mt-6'>
                    <AccordionItem title="Выберите COOP участников" >
                        aasddasdasddsa
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='mt-12'>
                {questions.map((question, index) => (
                    <div key={question.id} className='questionWraper'>
                        <h2>Вопрос №{index + 1}</h2>
                        <Input
                            type="text"
                            label="Введите название темы"
                            labelPlacement="outside"
                            radius="none"
                            size='lg'
                            value={question.title}
                            onChange={(e) => handleInputChange(question.id, e.target.value)}
                        />
                    </div>
                ))}
                <div className='w-full flex justify-end'>
                    <Button className='rounded-none bg-white mt-6' onPress={handleAddQuestion}>
                        + Добавить вопрос
                    </Button>
                </div>
                <div className='w-full flex justify-end'>
                    <Button className='rounded-none bg-white mt-6' onPress={handleSubmit}>
                        Отправить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default page