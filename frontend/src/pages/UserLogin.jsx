import React , {useState,useContext}from 'react'
import { Link } from 'react-router-dom'
import { userDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})

  const {user,setUser} = useContext(userDataContext);
  const navigate = useNavigate()

  const submithandler = async(e)=>{
    e.preventDefault();
    const userData = {
      email:email,
      password:password
    
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
    setemail('')
    setpassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col items-center justify-between'>
        <div >
        <img className='w-18 mb-38' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />

        <form onSubmit={(e)=>{
          submithandler(e)
        }} >
        <h3 className='text-lg font-medium mb-2'>What's your Email</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
        value={email}
        onChange={(e)=>{
          setemail(e.target.value)
        }}
        type="email" required placeholder='email@example.com' />
        <h3 className='text-xl mb-2'>Enter password</h3>
        <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
        value={password}
        onChange={(e)=>{
          setpassword(e.target.value)
        }}
        type="password" required placeholder='password' />
    <button className='bg-[#111] text-white  font-semibold mb-7 rounded px-4 py2 w-full text-lg placeholder:tetx-base'>Login</button>  
    <p className='text-center'>New here? <Link to='/signup' className='text-blue-600' >Create new account</Link>  </p>

        </form>

    </div>
      <div className='p-7'>
        <Link  to='/captain-login'
        className='bg-[#111] flex items-center text-white  font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
