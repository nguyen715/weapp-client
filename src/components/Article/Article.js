import { Link } from 'react-router-dom';

import './Article.css';

export default function Article(props) {
  return (
    <div className="Article">
      <img src={props.articleImageUrl} alt="" className="article-image" />
      <Link to={`article-details/${props.articleId}`}>
        <div className="article-data-container">
          <h2 className="article-title">{props.articleTitle}</h2>
          <div className="article-text-box">
            <i class="fa fa-quote-left"></i>
            <span className="article-text">{props.articleText}</span>
            <span className="article-date">{props.articleDate}</span>
          </div>
          <span className="article-author">{props.articleAuthor}</span>
        </div>
      </Link>
    </div>
  )
}