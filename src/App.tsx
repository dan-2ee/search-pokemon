import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import ViewPokemon from './pages/ViewPokemon';
import ViewFail from './pages/ViewFail';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/viewPokemon" element={<ViewPokemon/>} />
                <Route path="/viewFail" element={<ViewFail/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
