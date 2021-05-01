import './ArticlesList.css';
import { Link } from 'react-router-dom';
import store from '../../store';
import Article from '../Article/Article';
import CreateNewArticleButton from '../CreateNewArticleButton/CreateNewArticleButton';

export default function ArticlesList() {
  const articles = store.data.filter(article => !!article.content);

  return (
    <div className="ArticlesList">
      <Link to="/create-article">
        <CreateNewArticleButton />      
      </Link>
      <ul>
        {
          articles.map((article, key) => (
            <li key={article.id}>
              <Article
                articleId={article.id}
                articleImageUrl={article.image}
                articleTitle={article.title}
                articleText={article.content}
                articleDate={article.creation_date}
                articleAuthor={article.author_name}  
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}