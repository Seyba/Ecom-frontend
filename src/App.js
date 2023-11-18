import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Content from './pages/Content'
import Home from './pages/Home'
import Layout from './components/Layout'
import OurStore from './pages/OurStore'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { CompareProduct } from './pages/CompareProduct'

function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/content" element={<Content/>}/>
            <Route path="/store" element={<OurStore/>}/>
            <Route path="/blogs" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/compare-product" element={<CompareProduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>   
  )
}

export default App;
