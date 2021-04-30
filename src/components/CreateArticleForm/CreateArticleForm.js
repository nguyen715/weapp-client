import './CreateArticleForm.css';

export default function CreateArticleForm(props) {
  const handleSubmit = e => {
    e.preventDefault();
    // Do any necessary validation and send to the server here
    props.history.push('/');
  }

  return (
    <div className="CreateArticleForm">
      <form className="article-form" action="" onSubmit={handleSubmit}>
        <div className="article-form-item">
          <label htmlFor="article-form-photo" id="article-form-photo-label"><span className="label-text">Photo</span>
            <input type="file" id="article-form-photo" name="photo" accept=".jpg,.jpeg,.png,.gif" style={{display:"none"}} />
            <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt="cat" />
          </label>
        </div>
        <div className="article-form-item">
          <label htmlFor="article-form-name"><span className="label-text">Name</span>
          <input type="text" id="article-form-name" name="name" required ></input>

          </label>
        </div>
        <div className="article-form-item">
          <label htmlFor="article-form-email"><span className="label-text">Email</span>
          <input type="text" id="article-form-email" name="email" required ></input>
          </label>
        </div>
        <input type="submit" className="submit-btn" value="SAVE DATA"></input>
      </form>
    </div>
  )
}