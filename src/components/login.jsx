import './login.css'
const Login = () => {

    return (
        <div className="login-form-container">
            <h3 className="form-title">Login to continue</h3>
            <form className="login-form">
                <div className="input-container">
                    <label className="label" htmlFor="username">User name</label>
                    <input className="form-input" id="username" type="text" />
                </div>
                <div className="input-container">
                    <label className="label" htmlFor="pwd">Password</label>
                    <input className="form-input" id="pwd" type="password" />
                </div>
                <button className="submit-btn">Login</button>
            </form>
        </div>
    )
}

export default Login