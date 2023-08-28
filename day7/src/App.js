import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/signup' element = {<Signup />} />
        <Route path= '/login' element = {<Login />} />
        <Route path = '/home' element = {<Home />} />
        <Route path = '/profile' element = {<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
