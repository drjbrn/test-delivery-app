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

interface CartItem {
  id: number;
  title: string;
  price: number;
  rating: number,
  shop: string,
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface PersonalInfoProps {
  onDataSubmit: (data: PersonalInfo) => void;
  isSubmitted: boolean;
}

interface ModalProps {
  closeModal: () => void;
}