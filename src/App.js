import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import UserInputForm from './components/UserInputForm'
import UserInputsList from './components/UserInputsList'

import './App.css'

const App = () => {
  const [userInputs, setUserInputs] = useState([])

  const addUserInput = inputValue => {
    const newUserInput = {id: uuidv4(), text: inputValue}
    setUserInputs(prevInputs => [...prevInputs, newUserInput])
  }

  return (
    <div className="app-container">
      <div className="main-container">
        <UserInputsList userInputs={userInputs} />
        <UserInputForm addUserInput={addUserInput} />
      </div>
    </div>
  )
}

export default App
