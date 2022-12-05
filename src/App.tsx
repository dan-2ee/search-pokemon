import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main/>} />
                <Route path="/search" element={<Search/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
