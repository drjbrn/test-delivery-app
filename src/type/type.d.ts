interface ProductItemProps {
  id: number;
}

interface ProductsProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  shop: string;
}

interface ProductsInitialState {
  allProducts: ProductsProps[];
  selectedShop: string;
}