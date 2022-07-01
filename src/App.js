import React from 'react'
import './App.css';
import Header from './containers/header'
import Home from './containers/home'
import Admin from './containers/admin'
import Form from './containers/form'

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/form" element={<Form />}/>
          <Route exact path="/admin" element={<Admin />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
