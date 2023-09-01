import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import UserCart from './pages/UserCart';
import UpdateItem from './pages/UpdateItem';
import Auth from './utility/Auth';
import Logout from './utility/Logout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/signup' element = {<Logout><Signup /></Logout>} />
        <Route path= '/login' element = {<Logout><Login /></Logout> }/>
        <Route path = '/home' element = {<Auth><Home /></Auth>} />
        <Route path = '/profile' element = {<Auth><Profile /></Auth>} />
        <Route path= '/usercart' element = {<Auth><UserCart /></Auth>} />
        <Route path='/update' element = {<Auth><UpdateItem /></Auth>} />
      </Routes>
    </div>
  );
}

export default App;
