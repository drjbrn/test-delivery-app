import { Routes, Route, Link } from 'react-router-dom';
import ShopPage from './pages/Shop';
import Cart from './pages/Cart';
import './App.scss';
import { useSelector } from 'react-redux';
import { getCartItems } from './store/cartSlice';

function App() {
  const product = useSelector(getCartItems);
  const amountItemsInCart = product.length;

  return (
    <div className='app'>
      <Link to='/' className='app__button'>
        Shop
      </Link>
      <Link to='/cart' className='app__button'>
        Cart
        {' '}
        {amountItemsInCart}
      </Link>
      <Routes>
        <Route path='/' element={<ShopPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
