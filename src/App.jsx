import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './uiCollections/Home/home';
import LogIn from './uiCollections/Login/index';
import SignUp from './uiCollections/Signup/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/home' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
