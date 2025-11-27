// import React, { useState } from 'react'

// const Login = () => {
//     const[state,setState] = useState('Sign up')
//     const[name,setName] = useState('')
//     const[email,setEmail] = useState('')
//     const[password,setPassword] = useState('')

//     const onSubmitHandler = async (event) => {
//         event.preventDefault()
//         console.log(name);
//         console.log(email);
//         console.log(password);
//         }
    
//     return (
//     <form className='min-h-screen flex items-center bg-slate-300'>
//         <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 rounded-xl  text-zinc-600 text-sm shadow-2xl bg-white'>
//             <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login" }</p>
//             <p>Please {state === 'Sign Up' ? "Sign Up" : "log in"} to book appoinment</p>
//             {
//                 state === "Sign Up" &&
//                 <div className='w-full'>
//                     <p>Full Name</p>
//                     <input className='border  border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value) }  value={name}/>
//                 </div>
//             }
//                 <div className='w-full'>
//                     <p>Email</p>
//                     <input className='border  border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value) }  value={email}/>
//                 </div>
//                 <div className='w-full'>
//                     <p>Password</p>
//                     <input className='border  border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value) }  value={password}/>
//                 </div>
//                 <button onClick={(event) => onSubmitHandler(event)} className='bg-primary bg-blue-500 text-gray-600 w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}

//                 </button>
//                 {
//                     state === "Sign Up"
//                     ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
//                     : <p>Create a new account?  <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
//                 }
//         </div>
//     </form>
//   )
// }

// export default Login

import React from 'react'
import { useAppContext } from '../context/AppContext';

const Login = () => {
    const {setShowUserLogin, setUser} = useAppContext() //passing state from appcontext

    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSubmitHandler = async (event)=> {
      event.preventDefault();
      setUser({
        email: "admin@gmail.com",
        name: "admin"
      })
      setShowUserLogin(false)
    }

  return (
    <div onClick={()=> setShowUserLogin(false)} className='fixed top-0 bottom-0 left-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50'>
     <form onSubmit={onSubmitHandler} onClick={(e)=> e.stopPropagation()} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
            <p className="text-2xl font-medium m-auto">
                <span className="text-blue-600">User</span> {state === "login" ? "Login" : "Sign Up"}
            </p>
            {state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
            </div>
            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
            </div>
            {state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setState("login")} className="text-indigo-500 cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setState("register")} className="text-indigo-500 cursor-pointer">click here</span>
                </p>
            )}
            <button className="bg-blue-400 hover:bg-indigo-400 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                {state === "register" ? "Create Account" : "Login"}
            </button>
        </form>
        </div>
  )
}

export default Login