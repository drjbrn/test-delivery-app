import Rating from '@mui/material/Rating';
import { useSelector, useDispatch } from 'react-redux';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './ProductItem.scss';
import { getAllProducts } from '../../store/productSlice';
import { addItemToCart } from '../../store/cartSlice';

function ProductItem({ id }: ProductItemProps) {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  const product = products.find(product => product.id === id);
  const name = product?.name;
  const price = product?.price;
  const rating = product?.rating;
  const shop = product?.shop;

  const handleAddToCart = () => {
    dispatch(addItemToCart({
      id: id,
      title: name,
      price: price,
      rating: rating,
      shop: shop,
      quantity: 1,
      totalPrice: price
    }));
  };

  return (
    <div className='product'>
      <div className='product__shop'>
        {shop}
      </div>
      <Rating
        name='rating'
        value={rating}
        precision={0.5}
        size='small'
        readOnly
        className='product__rating'
      />
      <h3 className='product__name'>
        {name}
      </h3>
      <p className='product__price'>
        {price} &#x24;
      </p>
      <button
        className='product__cart-button'
        onClick={handleAddToCart}
      >
        <LocalMallIcon />
      </button>
    </div>
  );
}

export default ProductItem;