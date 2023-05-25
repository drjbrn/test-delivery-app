import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../store/productSlice';
import { setShop } from '../../store/productSlice';
import './Filters.scss';

function Filters() {
  const [ showAllProducts, setShowAllProducts ] = useState(false); 
  const products = useSelector(getAllProducts);
  const uniqueShops: string[]  = [];
  const dispatch = useDispatch(); 

  const filteredShops = products.filter((item) => {
    if (!uniqueShops.includes(item.shop)) {
      uniqueShops.push(item.shop);
      return true;
    }
    return false;
  });

  const handleAllClick = () => {
    setShowAllProducts(true);
    dispatch(setShop('All'));
  };

  const handleShopClick = (shop: string) => {
    dispatch(setShop(shop));
    console.log('Shop clicked:', shop);
  };

  return(
    <div className='filters'>
      <h3 className='filters__title'>
        Shops:
      </h3>
      <ul className='filters__list'>
        <li>
          <button onClick={handleAllClick} className='filters__btn'>
            All
          </button>
        </li>
        {filteredShops.map((item) => (
          <li key={item.id}>
            <button onClick={() => handleShopClick(item.shop)} className='filters__btn'>
              {item.shop}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filters;