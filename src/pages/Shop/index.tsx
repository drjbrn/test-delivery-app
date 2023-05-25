import ProductList from '../../components/ProductList';
import Filters from '../../components/Filters';
import './ShopPage.scss';

function ShopPage() {
  return(
    <div className='shop-page'>
      <Filters />
      <ProductList />
  </div>
  )
}

export default ShopPage;