import './ArticleDetails.css';
import store from '../../store';

export default function ArticleDetails(props) {
  const article = store.data.find(article => {return article.id == props.match.params.id});

  return (
    <div className="ArticleDetails">
      <div className="article-details-container">
        <img className="article-image" src={article.image} alt="" />
        <div className="article-author"><h2>{article.author_name}</h2></div>
        <div className="article-author-email">{article.author_email}</div>
        Registered on:
        <div className="article-register-date">{article.author_registration_date}</div>
      </div>
    </div>
  )
}