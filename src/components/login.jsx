import { useState } from 'react';
import './login.css'
const Login = () => {
    const [username, setUsername] = useState()
    const [pwd, setPwd] = useState()
    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handlePwd = (elt) => {
        setPwd(elt.target.value)
    }

    const onSubmit = () => {
        alert('username: ' + username + ' Password: ' + pwd)
    }
    return (
        <div className="login-form-container">
            <h3 className="form-title">Login to continue</h3>
            <div className='divider'>
                <div className='span-container'>
                    <span className='span'>
                        or
                    </span>
                </div>
                <hr />
            </div>
            <form className="login-form">
                <div className="input-container">
                    <label className="label" htmlFor="username">User name</label>
                    <input className="form-input" id="username" value={username} onChange={handleUsername} type="text" />
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="pwd">Password</label>
                    <input className="form-input" id="pwd" onChange={handlePwd} value={pwd} type="password" />
                </div>
                <button onClick={onSubmit} className="submit-btn">Login</button>
            </form>
        </div>
    )
}

export default Login