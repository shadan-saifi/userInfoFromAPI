import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [error,setError]=useState('');
  
const getUser= async ()=>{
  try {
    setError('')
    const userData=await fetch('http://localhost:8080/api/v1/public/randomusers?page=1&limit=10').then((data)=>data.json())
    if(userData){
      return setUser(userData.data.data[Math.floor(Math.random()*10)].name.first)
    }
  } catch (error) {
    console.log(error)

  }
}
  return (
    <>
      <h1>click to get a random user</h1>
      <button onClick={getUser}>Click</button>
      <p>Random user:{user}</p>
    </>
  )
}

export default App
