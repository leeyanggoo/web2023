import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main.jsx';
import Member from './components/pages/Member.jsx';
import Port from './components/pages/Port.jsx';
import Youtube from './components/pages/Youtube.jsx';
import Movie from './components/pages/Movie.jsx';
import Unsplash from './components/pages/Unsplash.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/member" element={<Member />} />
        <Route path="/port" element={<Port />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/unsplash" element={<Unsplash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
