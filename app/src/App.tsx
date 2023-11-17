import React from 'react';
import './App.css';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Work from './pages/Work';

function App() {
  return (
    <HashRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route  path='/work' element={<Work/>}/>
      </Route>
     </Routes>
    </HashRouter>
  );
}

export default App;
