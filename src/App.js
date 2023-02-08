import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'

function App () {
  return (
    <main>
      <Routes>
        <Route path='*' element={<CartPage />} />
      </Routes>
    </main>
  )
}

export default App
