import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Offers from './pages/Offers'
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
 
function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
              <Route path='/' element ={<Home></Home>} />
              <Route path='/profile' element ={<Profile></Profile>} />
              <Route path='/sign-up' element ={<SignUp></SignUp>} />
              <Route path='/sign-in' element ={<SignIn></SignIn>} />
              <Route path='/forgot-password' element ={<ForgotPassword></ForgotPassword>} />
              <Route path='/offers' element ={<Offers></Offers>} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
