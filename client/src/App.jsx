import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';

function App() {
    return (
    <div>
        <h1 style={{textAlign: 'center'}}>Favorite Authors</h1>
        <Routes>
            <Route path='/' element={ <Navigate to={'/authors/'} /> } />
            <Route path="/authors/" element={<Main/>} />
            <Route path="/authors/new" element={<NewAuthor/>} />
            <Route path="/authors/:id/edit" element={<UpdateAuthor/>} />

            <Route path='/:anythingElse' element={ <Navigate to={'/authors/'} /> } />
            <Route path='/authors/:anythingElse' element={ <Navigate to={'/authors/'} /> } />
        </Routes>                         
    </div>
    );
}
export default App;
