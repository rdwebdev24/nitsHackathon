import {React,useState,useEffect} from 'react'
import Login from './Components/frontend_/Login/Login'
import Main from './Components/frontend_/MainPage/Main'
import Register from './Components/frontend_/register/Register'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Landing from './Components/frontend_/Landing/Landing'
import Tempform from './Components/TempForm'
const App = () => {

  const [todo,setTodo] = useState([])
  const [userName,setUserName] = useState('');

  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Landing/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/main' element={<Main userName={userName} todo={todo} setTodo={setTodo}/>}/>
          </Routes>
      </BrowserRouter>
      {/* <Tempform/> */}
    </div>
  )
}

export default App
