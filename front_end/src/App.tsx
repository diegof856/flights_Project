import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//pages
import Home from './pages/Home'
//components
import NavBar from './components/NavBar'
function App() {
 

  return (
    <>
   
      <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
