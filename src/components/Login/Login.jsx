import { useState } from 'react'
import { Close } from '@material-ui/icons'
import './login.css'

const Login = ({login,setLogin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
    {login?
      <div className='LoginContainer'>
        <div className='LeftContainer'>
          <Close style={{ cursor: 'pointer' }} onClick={() => {setLogin(false)}} />
          <div className='centerElement'>
            <img
              src='https://static.uacdn.net/production/_next/static/images/home-illustration.svg?q=75&auto=format%2Ccompress&w=640'
              alt=''
              style={{
                margin: '45px 10px',
                justifyContent: 'center',
                width: '300px'
              }}
            />
          </div>
          <p className='pLoginLeft'>
            Over <span style={{ color: 'rgb(8, 189, 128)' }}>10 crore</span>{' '}
            learners trust us for their preparation
          </p>
          <div className='divLoginLeftIn'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '8px'
              }}
            >
              <svg
                style={{ width: '40px', margin: '3px 10px' }}
                class='css-a1vwta'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.9204 14.9463C2.29322 13.3191 2.29321 10.6809 3.9204 9.05372L9.0539 3.92022C10.6811 2.29303 13.3193 2.29303 14.9465 3.92022L20.08 9.05372C21.7071 10.6809 21.7071 13.3191 20.08 14.9463L14.9465 20.0798C13.3193 21.707 10.6811 21.707 9.0539 20.0798L3.9204 14.9463Z'
                  stroke='currentcolor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='M14.513 10.7065L11.3727 13.8469L9.48486 11.9651'
                  stroke='currentcolor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              <p>Learn from 2,000+ India’s top educators</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <svg
                style={{ width: '40px', margin: '2px 17px' }}
                class='css-a1vwta'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 24 24'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.9204 14.9463C2.29322 13.3191 2.29321 10.6809 3.9204 9.05372L9.0539 3.92022C10.6811 2.29303 13.3193 2.29303 14.9465 3.92022L20.08 9.05372C21.7071 10.6809 21.7071 13.3191 20.08 14.9463L14.9465 20.0798C13.3193 21.707 10.6811 21.707 9.0539 20.0798L3.9204 14.9463Z'
                  stroke='currentcolor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
                <path
                  d='M14.513 10.7065L11.3727 13.8469L9.48486 11.9651'
                  stroke='currentcolor'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
              <p>
                Access 3,00,000+ live classes, test series, courses and more for
                free
              </p>
            </div>
          </div>
        </div>
        <div className='RightContainer'>
          <h1 style={{ marginBottom: '8px' }}>Log in</h1>
          <p
            style={{
              fontWeight: '600',
              fontSize: '15px',
              marginBottom: '30px'
            }}
          >
            or <u>create a free account</u>
          </p>
          <form>
            <label>Email-ID</label>
            <input
              type='email'
              id='email'
              className='email'
              placeholder='Enter your email address'
              required
            />
            <label>Password</label>
            <input
              type='password'
              id='email'
              className='email'
              placeholder='Enter your password'
              required
            />
            <input type='submit' class='submitButton' value='Log In' />
          </form>
          <div className='centerElement'>
            <p className='ForgotPassword'>Forgot Password?</p>
          </div>
          <p className='trouble'>
            Having trouble? Write us on{' '}
            <u style={{ fontWeight: '600' }}>help@unacademy.com</u>
          </p>
        </div>
      </div>:null}
    </>
  )
}

export default Login