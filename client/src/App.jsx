import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Cart from './components/Carts'
import CartPage from './pages/CartPage'
import Register from './pages/Register'
import Payment from './pages/Payment'
import WishList from './pages/WishList'
import ContactPage from './pages/ContactPage'
import StripeContainer from './pages/StripeContainer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<Payment />} />
          <Route path='/payment' element={<StripeContainer />} />
          <Route path='/wishList' element={<WishList />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
