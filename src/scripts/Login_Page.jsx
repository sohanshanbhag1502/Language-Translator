import React from "react";

function App() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="form-container">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            {!isLogin && (
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
            )}
            <div className="form-group">
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </div>
            {isLogin ? (
                <div className="forgot-password">
                    <a href="#">Forgot Password</a>
                </div>
            ) : null}
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            <p onClick={toggleMode} className="mode-toggle">
                {isLogin ? <button>Create an account</button>: 'Already have an account?'}
            </p>
        </div>
    );
}