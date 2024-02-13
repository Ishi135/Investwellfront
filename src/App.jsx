import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './uiCollections/Home/home';
import LogIn from './uiCollections/Login/index';
import SignUp from './uiCollections/Signup/index';
import PolicyDocs from './uiCollections/policy_docs/table';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/home' element={<Main/>}></Route>
          <Route path='/policydoc' element={<PolicyDocs/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;