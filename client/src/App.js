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
<<<<<<< HEAD
=======
import Logo from './components/Logo';
import CreatComment from './views/CreatComment';
>>>>>>> 95bb1ef407ee198537c9fb4effae501fda622faa


function App() {
  return (
    <div className="App">
      <Header />
      <CreatePhoto/>
      <CreatComment/>
      <Router >
      <Main path ="/"/>
      <Login path = "/login"/>
      <Register path = "/register"/>
      <PhotoDetails path = "/photo/:id"/>   
      {/* <CreatePhoto path ="/createPhoto" /> */}
      <PhotographerDetail path= "/photographer/:id"/>
      <Chat path= "/chat"/>

      </Router>
      <Footer />
    </div>
  );
}

export default App;
