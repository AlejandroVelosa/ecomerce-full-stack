
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './pages/slices/products.slice'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Header from './componets/shared/Header'
import CartPage from './pages/CartPage'
import { getCartThunk } from './pages/slices/cart.slice'
import PurchasesPages from './pages/PurchasesPages'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Footer from './componets/shared/Footer'
import DashboardPage from './pages/DashboardPage'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])


  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductIdPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={< LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<DashboardPage />}></Route>
          <Route path='/cart' element={< CartPage />} />
          <Route path='/purchases' element={< PurchasesPages />} />
        </Route>

      </Routes>

      <Footer />
    </div>
  )
}

export default App
