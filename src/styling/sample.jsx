<div id="mainform">
            <center><div className="form-container">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                {!isLogin && (
                    <div className="form-group">
                        <label className="labels">Email:</label>
                        <input
                            className="inps"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                )}
                <div className="form-group">
                    <label className="labels">Username:</label>
                    <input
                        className="inps"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="form-group">
                    <label className="labels">Password:</label>
                    <input
                        className="inps"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                {isLogin ? (
                    <div className="forgot-password">
                        <a href="#" id="link">Forgot Password</a>
                    </div>
                ) : null}
                <button type="submit" className="buttons">{isLogin ? 'Login' : 'Sign Up'}</button>
                <p onClick={toggleMode} className="mode-toggle">
                    {isLogin ? <button className="buttons">Create an account</button>: 'Already have an account?'}
                </p>
            </div></center>
        </div>