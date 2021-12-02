import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 
import Home from './pages/Home'
function App() {


  return (
    <Router>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/empresa">Empresa</Link>
        </li>
        <li>
        <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Routes>
        <Route exact 
          path="/"
          element={<Home />} />
      </Routes>

    </Router>
  )
}

export default App
