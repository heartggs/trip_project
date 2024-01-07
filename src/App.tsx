import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import TestPage from './pages/Test'
import CardPage from './pages/Card'

function App() {
  console.log(process.env)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/card/:id" Component={CardPage} />
        <Route path="/test" Component={TestPage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
