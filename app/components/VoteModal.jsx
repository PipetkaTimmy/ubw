import React from 'react'
import { Modal, ModalContent, Button, Progress } from "@nextui-org/react";


const VoteModal = ({ isOpen, onClose }) => {
    return (
        <Modal
            size='full'
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalContent>
                <div className='voteContent'>
                    <span className='voteModalQuestionNumber'>
                        Вопрос №1
                    </span>
                    <span className='voteModalTitle'>
                        Считаете ли вы, что обновлённый дизайн стал значительно проще прежнего?
                    </span>
                    <div className='voteVariants'>
                        <Button className='voteBtn'>
                            <img src="/vote/0.svg" alt="" />
                            <span>Поддерживаю</span>
                        </Button>
                        <Button className='voteBtn'>
                            <img src="/vote/1.svg" alt="" />
                            <span>Воздержусь</span>
                        </Button>
                        <Button className='voteBtn'>
                            <img src="/vote/2.svg" alt="" />
                            <span>Против</span>
                        </Button>
                    </div>
                    <div className='progresWraper'>
                        <span className='questionList'>
                            1/2
                        </span>
                        <Progress
                            size="lg"
                            radius="none"
                            classNames={{
                                base: "max-w-5xl",
                                track: "drop-shadow-md",
                                indicator: "bg-gradient-to-r from-blue-900 to-blue-300",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60",
                            }}
                            className='rounded-0'
                            value={100}
                        />
                    </div>
                </div>

            </ModalContent>
        </Modal>
    )
}

export default VoteModal