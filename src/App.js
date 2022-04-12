import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import FavoriteSongs from './pages/FavoriteSongs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/search' element={ <Search /> } />
        <Route path='/album/:id' element={ < Album /> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/profile/edit' element={ <EditProfile /> } />
        <Route path='/favorites' element={ <FavoriteSongs /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
