import {  lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const HomeScreen = lazy(() => import('./screens/HomeScreen/HomeScreen'));
const ProductOverview = lazy(()=> import('./screens/ProductOverviewScreen/ProductOverviewScreen'));
const ProductScreen = lazy(() => import('./screens/ProductScreen/ProductScreen'));
const CartScreen = lazy(() => import('./screens/CartScreen/CartScreen'));
const CheckoutScreen = lazy(() => import('./screens/CheckoutScreen/CheckoutScreen'));



function App() {
  return(
    <BrowserRouter>
    {/* <Suspense> */}
     <Routes>
       <Route path="/" element={<HomeScreen/>}/>
       <Route path="/product" element={<ProductScreen/>}/>
       <Route path="/product-overview" element={<ProductOverview/>}/>
       <Route path="/cart" element={<CartScreen/>}/>
       <Route path="/checkout" element={<CheckoutScreen/>}/>


 
     </Routes>
    {/* </Suspense> */}
  </BrowserRouter>
  )
}

export default App;
