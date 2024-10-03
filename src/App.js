import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Example from './CartScreen/CartScreen';

const HomeScreen = lazy(()=> import('../src/HomeScreen/HomeScreen'));
const CartScreen = lazy(()=> import('../src/CartScreen/CartScreen'));
const ProductSreen = lazy(() => import('../src/ProductScreen/ProductScreen'))

function App() {
 <Router>
   <Suspense>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
    </Routes>
   </Suspense>
 </Router>
}

export default App;
