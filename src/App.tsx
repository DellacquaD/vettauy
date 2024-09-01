import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'
import ContactForm from './routes/ContactForm'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactForm />}/>
      </Route>
    </Routes>
  )
}

export default App
