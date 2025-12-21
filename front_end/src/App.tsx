import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
//components
import NavBar from './components/NavBar'
import Details from './pages/Details/Details'
const url:string = "http://localhost:3333/flights";
function App() {
 

  return (
    <>
   
      <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route path="/" element={<Home url={url}/>}/>
        <Route path="/flights/:id" element={<Details url={url}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
