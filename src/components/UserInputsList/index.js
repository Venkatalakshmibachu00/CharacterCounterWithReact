import UserInputItem from '../UserInputItem'
import NoUserInputs from '../NoUserInputs'

import './index.css'

const UserInputsList = props => {
  const {userInputs} = props
  return (
    <div className="User-inputs-list-container">
      <h4 className="title">Count the charecters like a Boss...</h4>
      {userInputs.length === 0 ? (
        <NoUserInputs />
      ) : (
        <ul className="user-inputs-list">
          {userInputs.map(input => (
            <UserInputItem key={input.id} inputText={input.text} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserInputsList
