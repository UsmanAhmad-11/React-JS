import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
     <h2>React with Usman</h2>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
