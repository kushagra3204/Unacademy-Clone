import { useState } from 'react'
import './login.css'

const SignUp = ({login,setLogin}) => {
  
  const [name,setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword,setRepassword] = useState('')

  const handleSignUp = () => {
    if(password === repassword) {
        alert("Successful");
    }
    else {
        alert("Re-Password does not match with Password");
    }
  }

  return (
    <>
      <div>
        <form onSubmit={handleSignUp}>
        <label>Name</label>
          <input
            type='text'
            id='name'
            className='name btn-style'
            placeholder='Enter your name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
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
          <label>Re-enter Password</label>
          <input
            type='password'
            id='repassword'
            className='btn-style repassword'
            placeholder='Renter your password'
            value={repassword}
            onChange={e => setRepassword(e.target.value)}
            required
          />
          <input type='submit' class='submitButton' value='Sign Up' />
        </form>
      </div>
    </>
  )
}

export default SignUp