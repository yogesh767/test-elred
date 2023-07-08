import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

import Home from './pages/home';
import EditBio from './pages/EditBio';
import AboutMe from './pages/AboutMe';
import { useState } from 'react';
function App() {
  const navigate = useNavigate();
  const [profile, setprofile] = useState({})

  const path = useLocation().pathname;
  console.log('====================================');
  console.log(profile);
  console.log('====================================');
  return (
    <div className="App">
      <main className="mainDiv">
        <div className='title p-3'>
          <p>  <button className='btn' style={{ visibility: path == "/" && "none" }} onClick={() => navigate(-1)} >  &lt; </button> <span>My Bio </span> </p>
          <Routes>
            <Route path='/' element={<Home profile={profile} setprofile={setprofile}/>} />
            <Route path='EditBio' element={<EditBio profile={profile} setprofile={setprofile}/>} />
            <Route path='AboutMe' element={<AboutMe profile={profile} setprofile={setprofile}/>} />
          </Routes>

        </div>
      </main>
    </div>
  );
}

export default App;
