import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/Shop';
import './App.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
