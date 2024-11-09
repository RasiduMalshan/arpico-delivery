import React from 'react'
import Header from './component/nav/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return(
    <Router>
      <div className='bg-slate-500'>
        <nav>
          <Header/>
        </nav>
        <Routes>
          <Route path="/" />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App