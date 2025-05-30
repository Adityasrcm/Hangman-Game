import './App.css'
import Button from './components/Button/Button'
import TextInput from './components/TextInput/TextInput'
import TextInputForm from './components/TextInputForm/TextInputForm'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import { Route , Routes } from 'react-router-dom'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'
import Gameover from './pages/Gameover'

function App() {
 
  return (
 
  <Routes>
    <Route path='/start' element={<StartGame/>}/>
    <Route path='/play' element={<PlayGame/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/Gameover' element={<Gameover/>}/>
    
    
  </Routes>

  )
}

export default App
