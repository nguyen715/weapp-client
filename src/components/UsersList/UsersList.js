import './UsersList.css';
import store from '../../store';

export default function UsersList() {
  const users = store.users_data;

  function User(props) {
    console.log(props.userName);
    return (
      <div className="User">
        <div className="image-container">
          <div className="image-cropper">
            <img src={props.userPhotoUrl} alt="avatar" class="user-profile-pic" />
          </div>
        </div>
        <div className="user-data-container">
          <div className="user-name">{props.userName}</div>
          <div className="user-email">{props.userEmail}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="UsersList">
      <ul>
      {
        users.map((user, key) => (
          <li key={user.id}>
            <User userPhotoUrl={user.photo}
                  userName={user.name}
                  userEmail={user.email}
            />
          </li>
        ))
      }
      </ul>
    </div>
  )
}