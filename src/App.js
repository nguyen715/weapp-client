import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Context from './context/context';
import Header from './components/Header/Header';
import ArticlesList from './components/ArticlesList/ArticlesList';
import Profile from './components/Profile/Profile';
import './App.css';

function App() {
  const [userName, setUserName] = useState('Jack Barton');
  const [userEmail, setUserEmail] = useState('jack123@example.org');
  const [userPhotoUrl, setUserPhotoUrl] = useState('https://voxiot.com/images/users/62.jpg');

  const settings = {
    userName: userName,
    userEmail: userEmail,
    userPhotoUrl: userPhotoUrl,
    setUserName,
    setUserEmail,
    setUserPhotoUrl,
  }

  return (
    <div className="App">
      <Context.Provider value={settings}>
        <Header />
        <Route path="/profile" component={Profile} />
        <Route exact path="/" component={ArticlesList} />
      </Context.Provider>
    </div>
  );
}

export default App;
