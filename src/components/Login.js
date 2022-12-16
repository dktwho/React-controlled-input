

import React from 'react'
import { useState } from 'react'

const Login = () => {
  // const [userName, setUserName] = useState('')
  // const [userPassword, setUserPassword] = useState('')

  const [data,setData ] = useState({username: '', password: ''})

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log(data)
    setData({username: '', password: ''})
   
  }

  function handleInputChange(text, name) {
    setData({...data, [name]: text.target.value })
   
  }


  return (
    <>
    <div>
      <form action="" onSubmit={handleFormSubmit} >
        <label>Username:
          {/* <input type="text" value={userName} onChange={(e) => setUserName(e.target.value) } /> */}
          {/* <input type="text" value={data.username} onChange={(e) => setData({...data, username: e.target.value}) } /> */}
          <input type="text" value={data.username} onChange={(e) => handleInputChange(e, 'username') } />
        </label>
        
        <label>Password:
          {/* <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value) }/> */}
          {/* <input type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value}) }/> */}
          <input type="password" value={data.password} onChange={(e) => handleInputChange(e, 'password')}/>
        </label>

        <button type="submit">Login</button>
      </form>
      
    </div>
      <p>Username: {data.username}</p>
      <p>Password: {data.password}</p>
    </>
  )
}

export default Login
