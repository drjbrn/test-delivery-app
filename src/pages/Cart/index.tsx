import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems, removeAllItemsFromCart, getCartTotalPrice } from '../../store/cartSlice';
import { ref, push, update } from 'firebase/database';
import { db } from '../../utils/firebase';
import PersonalInfo from '../../components/PersonalInfo';
import CartList from '../../components/CartList';
import Modal from '../../components/Modal';
import './Cart.scss';

const personalInfoDefault = { name: '', email: '', phone: '', address: '' }

function Cart() {
  const totalPrice = useSelector(getCartTotalPrice);
  const productsFromCart = useSelector(getCartItems);
  const [ personalInfo, setPersonalInfo ] = useState<PersonalInfo>(personalInfoDefault);
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ isSubmitted, setIsSubmitted ] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handlePersonalInfoSubmit = (data: PersonalInfo) => {
    setPersonalInfo(data);
  };

  const hasEmptyField = Object.values(personalInfo).some((value) => value === '');

  const handleOrderClick = () => {
    if (productsFromCart.length > 0 && !hasEmptyField) {
      const ordersRef = ref(db, 'orders');
      const newOrderKey = push(ordersRef).key;
  
      const updates: Record<string, any> = {};
      updates['/orders/' + newOrderKey] = {
        personalInfo,
        productsFromCart
      };
  
      update(ref(db), updates)
        .then(() => {
          console.log('The order data has been successfully saved.');
        })
        .catch((error) => {
          console.error('Error saving order data:', error);
        });

      setTimeout(() => {
        setShowModal(true)
        setIsSubmitted(true);
        dispatch(removeAllItemsFromCart(undefined));
      }, 1500)
    }
  };
  
  const handleModalChange = () => {
    setShowModal(false)
    setIsSubmitted(false);
  }

  return(
    <div className='cart'>
      <h2 className="cart__title">
        Your Shopping Cart
      </h2>
      <div className='cart__wrapper'>
        <PersonalInfo onDataSubmit={handlePersonalInfoSubmit} isSubmitted={isSubmitted} />
        <CartList />
      </div>
      <p className='cart__total-price'>
        Total price: {totalPrice}&#x24;
      </p>
      <button
        className='cart__btn-submit'
        onClick={handleOrderClick}
        disabled={productsFromCart.length === 0 || hasEmptyField}
      >
        SUBMIT
      </button>
      {
        showModal && <Modal closeModal={handleModalChange}/>
      }
    </div>
  )
}

export default Cart;