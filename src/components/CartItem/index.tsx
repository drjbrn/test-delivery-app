import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cartSlice';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './CartItem.scss';

function CartItem({ id, title, price, quantity, totalPrice, rating, shop }: CartItem) {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(addItemToCart({
      id,
      title,
      price,
      rating,
      shop,
      quantity: 1,
    }));
  };

  return(
      <li className='cart-item'>
        <h3 className='cart-item__name'>
          {title}
        </h3>
        <div className='cart-item__shop'>
          {shop}
        </div>
        <Rating
          name='rating'
          value={rating}
          precision={0.5}
          size='small'
          readOnly
          className='cart-item__rating'
        />
        <div className='cart-item__price'>
          {totalPrice.toFixed(2)}&#x24;
          <span className='cart-item__price_span'>
            ({price.toFixed(2)}&#x24;/item)
          </span>
        </div>
        <div className='cart-item__quantity'>
          x <span>{quantity}</span>
        </div>
        <button onClick={addItemHandler} className='cart-item__btn-add'>
          <AddIcon />
        </button>
        <button onClick={removeItemHandler} className='cart-item__btn-remove'>
          <RemoveIcon />
        </button>
      </li>
  )
}

export default CartItem;