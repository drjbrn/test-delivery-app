import { Routes, Route, Link } from 'react-router-dom';
import ShopPage from './pages/Shop';
import Cart from './pages/Cart';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Link to='/' className='app__button'>
        Shop
      </Link>
      <Link to='/cart' className='app__button'>
        Cart
      </Link>
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
