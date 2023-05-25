import { setProducts } from '../../store/productSlice';
import { db } from '../../utils/firebase';
import { onValue, ref } from "firebase/database";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredProducts } from '../../store/productSlice';
import ProductItem from '../ProductItem';
import './ProductList.scss';

function ProductList() {
  const filteredProducts = useSelector(selectFilteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const query = ref(db, 'teas');
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const products = Object.values(data);
        // console.log(products);
        dispatch(setProducts(products));
      }
    });
  }, [dispatch]);

  return (
    <div className='products'>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} id={product.id} />
      ))}
    </div>
  );
}
export default ProductList;