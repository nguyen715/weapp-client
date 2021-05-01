import { Link } from 'react-router-dom';
import './Menu.css';

export default function Menu(props) {
  let menuClassName;
  menuClassName = props.isOpen ? "Menu open" : "Menu closed";

  return (
    <div className={menuClassName}>
      <div className="menu-header"><h2>Menu</h2></div>
        <Link to="/">
          <div className="menu-item" onClick={props.toggleMenu}>
              <i className="fa fa-home"></i>
              <span className="menu-item-label">News</span>
          </div>
        </Link>
      <div className="menu-item">
        <i className="fa fa-list-ul"></i>
        <span className="menu-item-label">Users</span>
      </div>
      <Link to="/profile">
        <div className="menu-item" onClick={props.toggleMenu}>
          <i className="fa fa-user-circle profile"></i>
          <span className="menu-item-label">Me</span>
        </div>
      </Link>
      <Link to="/create-article">
        <div className="menu-item" onClick={props.toggleMenu}>
          <i className="fa fa-plus"></i>
          <span className="menu-item-label">Create new article</span>
        </div>
      </Link>
    </div>
  )
}