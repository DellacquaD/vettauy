import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import Home from './routes/Home'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
      </Route>
    </Routes>
  )
}

export default App
