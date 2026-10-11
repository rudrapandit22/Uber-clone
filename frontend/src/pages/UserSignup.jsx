import React,{useState,useContext} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios'
import {userDataContext} from '../context/userContext'


const UserSignup = () => {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [userData, setuserData] = useState({})

  const navigate = useNavigate()
  const {user,setUser} = React.useContext(userDataContext)

  const submithandler = async (e)=>{
    e.preventDefault();
      const newUser = {
      fullname:{
        firstname:firstname,
      lastname:lastname
      },
      email:email,
      password:password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    
    if(response.status == 201){
      const data = response.data

      setUser(data.user)
      navigate('/home')
    }

    setfirstname('')
    setlastname('')
    setemail('')
    setpassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col items-center justify-between'>
    <div >
    <img className='w-18 mb-12' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />

    <form onSubmit={(e)=>{
      submithandler(e)
    }} >
    <h3 className='text-lg font-medium mb-2'>Enter your Firstname</h3>
    <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
    value={firstname}
    onChange={(e)=>{
      setfirstname(e.target.value )
    }}
    type="text" required placeholder='Shivam' />
    
    <h3 className='text-lg font-medium mb-2'>Enter your Lastname</h3>
    <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
    value={lastname}
    onChange={(e)=>{
      setlastname(e.target.value )
    }}
    type="text" required placeholder='Yadav' />
    
    <h3 className='text-lg font-medium mb-2'>Enter your Email</h3>
    <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
    value={email}
    onChange={(e)=>{
      setemail(e.target.value )
    }}
    type="email" required placeholder='email@example.com' />
    
    <h3 className='text-xl mb-2'>Enter password</h3>
    <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
    value={password}
    onChange={(e)=>{
      setpassword(e.target.value )
    }}
    type="password" required placeholder='password' />

    <button className='bg-[#111] text-white  font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
    >Create an account</button>  
<p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600' >Login</Link>  </p>

    </form>

</div>
</div>
  )
}

export default UserSignup
