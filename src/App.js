import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ < Album /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
