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
          <label htmlFor="article-form-image" id="article-form-image-label"><span className="label-text">Image</span>
            <input type="file" id="article-form-image" name="image" accept=".jpg,.jpeg,.png,.gif" style={{display:"none"}} />
            <i className="fa fa-image"></i>
          </label>
        </div>
        <div className="article-form-item">
          <label htmlFor="article-form-title"><span className="label-text">Title</span>
          <input type="text" id="article-form-title" name="title" required ></input>

          </label>
        </div>
        <div className="article-form-item">
          <label htmlFor="article-form-content"><span className="label-text">Content</span>
          <input type="text" id="article-form-content" name="content" required ></input>
          </label>
        </div>
        <input type="submit" className="submit-btn" value="SAVE DATA"></input>
      </form>
    </div>
  )
}