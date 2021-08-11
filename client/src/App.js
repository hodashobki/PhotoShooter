import {Router} from '@reach/router'
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

function App() {
  return (
    <div className="App">
      <Header />

      <Router >
      <Main path ="/"/>
      <Login path = "/login"/>
      <Register path = "/register"/>
      <PhotoDetails path = "/photo/:idp"/>   
      <CreatePhoto path ="/createPhoto/:idu" />
      <PhotographerDetail path= "/photographer/:id"/>
      <Chat path= "/chat"/>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
