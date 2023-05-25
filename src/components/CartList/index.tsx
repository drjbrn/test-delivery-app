import { useSelector } from 'react-redux'
import { getCartItems } from '../../store/cartSlice';
import CartItem from '../CartItem';
import './CartList.scss';

function CartList() {
  const products = useSelector(getCartItems);

  if (products.length === 0) {
    return(
      <h3 className='cart__text'>
        Cart is empty
      </h3>
    )
  }

  return(
    <ul className='cart__list'>
      {products.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          totalPrice={item.totalPrice}
          rating={item.rating}
          shop={item.shop}
        />
      ))}
    </ul>
  )
}

export default CartList;