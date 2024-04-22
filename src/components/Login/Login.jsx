import { useState } from 'react'
import './login.css'

const Login = ({login,setLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    alert("Email: "+email+"\nPassword: "+password)
  }

  return (
    <>
      <div>
        <form onSubmit={handleLogin}>
          <label>Email-ID</label>
          <input
            type='email'
            id='email'
            className='btn-style email'
            placeholder='Enter your email address'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type='password'
            id='password'
            className='btn-style password'
            placeholder='Enter your password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input type='submit' class='submitButton' value='Log In' />
        </form>
        <div className='centerElement'>
          <p className='ForgotPassword'>Forgot Password?</p>
        </div>
      </div>
    </>
  )
}

export default Login