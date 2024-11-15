
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactsPage from './pages/ContactPage'

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactsPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
