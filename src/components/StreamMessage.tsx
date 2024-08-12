// src/ChatBox.tsx
import React, { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import { useChatContext } from '../context/ChatContextProvider';

const socket = io('http://localhost:4000'); // Replace with your backend URL

const StreamMessage: React.FC = () => {
    const { updateStream } = useChatContext()

    useEffect(() => {
        socket.on('chunk', (chunk: string) => {
            updateStream(chunk)
        });

        return () => {
            socket.off('chunk');
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        socket.emit('prompt', "hello")
    };

    return (
        <button onClick={() => socket.emit("prompt", "hello server")} className='border-2'>Stream</button>
    );
};

export default StreamMessage
