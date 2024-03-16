
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Innovation from './pages/Innovation'
import Home from './pages/Home'
import Bootcamp from './pages/Bootcamp'

function App() {
  return (
    <Router>
        <Routes>

          <Route exact path='/' element={<Home/>} />
          <Route exact path='/innovation' element={<Innovation />}/>
          <Route exact path='/bootcamp' element={<Bootcamp />}/> 
                        
        </Routes>
      </Router>

  )
}

export default App