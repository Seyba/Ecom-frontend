import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Content from './pages/Content'
import Home from './pages/Home'
import Layout from './components/Layout'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/content" element={<Content/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>   
  )
}

export default App;
