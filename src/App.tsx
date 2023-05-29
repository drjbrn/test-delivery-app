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
      <Link to='/test-delivery-app/' className='app__button'>
        Shop
      </Link>
      <Link to='/test-delivery-app/cart' className='app__button'>
        Cart
        {' '}
        {amountItemsInCart}
      </Link>
      <Routes>
        <Route path='/test-delivery-app/' element={<ShopPage />} />
        <Route path='/test-delivery-app/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
