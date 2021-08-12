import { Router } from '@reach/router'
import './App.css';
import Main from './views/Main'
import Login from './components/sign/Login'
import Register from './components/sign/Register'
import CreatePhoto from './views/CreatePhoto'
import PhotographerDetail from './views/PhotographerDetail'
import Chat from './views/Chat'
import PhotoDetails from './views/PhotoDetails'
import Header from './components/Header'
import Footer from './components/Footer'
import Logo from './components/Logo';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import HomePage from './views/HomePage';
import back from './images/back.jpeg'
import backk from './images/backk.jpg'

const style={
  back :{
      backgroundImage: "url(" + back + ")",
  }
}

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App" style= {style.back}>
      <Header />
      <Router >
        <Main path="/" />
        {user && user._id ? <HomePage path="/homepage" setLoginUser={setLoginUser} /> : <Login path="/login" setLoginUser={setLoginUser} />}
        <Login path="/login" setLoginUser={setLoginUser} />
        <Register path="/register" />
        <PhotoDetails path="/photo/:idp" />
        <CreatePhoto path="/createPhoto/:idu" />
        <PhotographerDetail path="/photographer/:id" />
        <Chat path="/chat" />

      </Router>
      <Footer />
    </div>
  );
}

export default App;
