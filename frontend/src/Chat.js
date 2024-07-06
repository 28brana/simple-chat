import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const ENDPOINT = "http://localhost:8000";

function Chat({ username }) {
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(ENDPOINT);
        setSocket(newSocket);

        newSocket.emit('join', username);

        newSocket.on('message', (message) => {
            setMessages((msgs) => [...msgs, message]);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [username]);

    const handleSendMessage = () => {
        if (newMessage && socket) {
            socket.emit('message', {
                username,
                message: newMessage
            });
            setNewMessage('');
        }
    };
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };
    return (
        <div className='bg-gray-800 min-h-screen'>
            <div className='flex justify-center items-center pt-2'>
                <div className='w-1/2 flex'>
                    <input
                        className='p-2 border border-gray-600 rounded-l-md w-full'
                        type="text"
                        placeholder="Type a message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyDown} 
                    />
                    <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md'
                        onClick={handleSendMessage} >Send</button>
                </div>
            </div>
            <div className='px-10 pt-3 flex flex-col gap-2'>
                {messages.map((msg, index) => (
                    <div key={index} className={username === msg.username ? 'left' : 'right'}>{msg.message}</div>
                ))}
            </div>
        </div>
    );
}

export default Chat;
