import {useState} from 'react'

import './index.css'

const UserInputForm = ({addUserInput}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const onSubmitInput = event => {
    event.preventDefault()
    if (inputValue.trim() !== '') {
      addUserInput(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className="user-input-form-container">
      <h2 className="main-title">Character Counter</h2>
      <form onSubmit={onSubmitInput}>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter the Characters here"
            className="user-input-field"
          />
          <button type="submit" className="add-button">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default UserInputForm
