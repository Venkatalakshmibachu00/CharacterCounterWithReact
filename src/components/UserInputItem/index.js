import './index.css'

const UserInputItem = ({inputText}) => (
  <li className="user-input-item">
    <p className="user-input-text">
      {inputText}: {inputText.length}
    </p>
  </li>
)

export default UserInputItem
