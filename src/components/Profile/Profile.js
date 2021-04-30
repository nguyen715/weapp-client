import { useContext, useRef } from 'react';
import './Profile.css';
import Context from '../../context/context';

export default function Profile(props) {
  const context = useContext(Context);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const emailRegExp = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");

  const handleSubmit = e => {
    e.preventDefault();

    if(!emailRegExp.test(emailInputRef.current.value)) {
      alert('This does not appear to be a valid email address. Please try again.');
      return;
    }

    else {
      context.setUserName(nameInputRef.current.value);
      context.setUserEmail(emailInputRef.current.value);
      props.history.push('/');

      // For a production build, save the user's photo upload in the backend right here
    }
  }

  return (
    <div className="Profile">
      <form className="profile-form" action="" onSubmit={handleSubmit}>
        <div className="profile-form-item">
          <label htmlFor="profile-photo" id="profile-photo-label"><span className="label-text">Photo</span>
            <input type="file" id="profile-photo" name="photo" accept=".jpg,.jpeg,.png,.gif" style={{display:"none"}} />
            <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="cat" />
          </label>
        </div>
        <div className="profile-form-item">
          <label htmlFor="profile-name"><span className="label-text">Name</span>
          <input type="text" id="profile-name" name="name" ref={nameInputRef} defaultValue={context.userName}  required ></input>

          </label>
        </div>
        <div className="profile-form-item">
          <label htmlFor="profile-email"><span className="label-text">Email</span>
          <input type="text" id="profile-email" name="email" ref={emailInputRef} defaultValue={context.userEmail} required ></input>
          </label>
        </div>
        <input type="submit" className="submit-btn" value="SAVE DATA"></input>
      </form>
    </div>
  )
}