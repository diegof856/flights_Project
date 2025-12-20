import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
//components
import NavBar from './components/NavBar'
import Details from './pages/Details/Details'
function App() {
 

  return (
    <>
   
      <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flights/:id" element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
