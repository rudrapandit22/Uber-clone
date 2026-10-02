import React , {useState} from 'react'
import { Link } from 'react-router-dom'
const Captainlogin = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [captainData, setcaptainData] = useState({})
  const submithandler = (e)=>{
    e.preventDefault();
    setcaptainData({
      email:email,
      password:password
    })
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
    <p className='text-center'>New here? <Link to='/captain-signup' className='text-blue-600' >Register as a Captain</Link>  </p>

        </form>

    </div>
      <div className='p-7'>
        <Link  to='/login'
        className='bg-[#111] flex items-center text-white  font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
      </div>
    </div>
  )
}

export default Captainlogin
