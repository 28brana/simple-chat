import React, { useState } from 'react';
import Login from './Login';
import Chat from './Chat';

function App() {
    const [username, setUsername] = useState('');
    const [isChatActive, setIsChatActive] = useState(false);

    const handleChange = (event) => {
        setUsername(event.target.value)
    }
    const handleJoin = (e) => {
        e.preventDefault();
        if (username) {
            setIsChatActive(true);
        }
    };


    return (
        <>
            {
                isChatActive ? (
                    <Chat username={username} />
                ) : (
                    <Login handleJoin={handleJoin} username={username} handleChange={handleChange} />
                )
            }
        </>
    );
}

export default App;
