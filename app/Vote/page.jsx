'use client'
import React from 'react';
import { Button, useDisclosure } from "@nextui-org/react";
import VoteModal from '../components/VoteModal';

const page = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div className='mainBlock'>
            <h1 className='title'>Текущие голосования</h1>
            <div className='voteContainer'>
                <Button onPress={() => onOpen()} className='voteCard'>
                    <div className='voteIndicator'></div>
                    <span className='voteTopic'>Тема голосования</span>
                    <span className='voteTitle'>Проверка удобства нового интерфейса</span>
                    <span className='voteCount'>Проголосовало: <b>20</b></span>
                </Button>
                <div className='voteCard opacity'>
                    <div className='voteIndicator'></div>
                    <span className='voteTopic'>Тема голосования</span>
                    <span className='voteTitle'>Проверка удобства нового интерфейса</span>
                    <span className='voteCount'>Проголосовало: <b>20</b></span>
                </div>
            </div>
            <VoteModal isOpen={isOpen} onClose={onClose} />

        </div>
    )
}

export default page