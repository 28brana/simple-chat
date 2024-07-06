const Login = ({ handleJoin, handleChange, username }) => {
    return (
        <div className="[background:#262432] h-screen flex items-center justify-center">
            <form onSubmit={handleJoin}>
                <div className="bg-white px-4 py-3 rounded-sm w-96 text-center">
                    <p className="text-2xl mb-6">Join Chat 👋</p>
                    <input type="text" required value={username} onChange={handleChange} className="input-regular" placeholder="Enter User name" />
                    <button type="submit" className="btn-primary mt-4">Start Chat</button>
                </div>
            </form>
        </div>
    )
}

export default Login;