import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
      </Route>
    </Routes>
  )
}

export default App
