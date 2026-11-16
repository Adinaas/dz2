import { React } from 'react'
import './App.css'
import { UserList } from './components/UserList'

export function App() {
 
  return (
   <div className='app-container'>
    <h1 className='app-title'>Активные пользователи</h1>
    <UserList />
   </div>
  )
}

