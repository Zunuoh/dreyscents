import {  lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

const HomeScreen = lazy(() => import('./screens/HomeScreen/HomeScreen'));
const CartScreen = lazy(()=> import('./screens/CartScreen/CartScreen'));
const ProductScreen = lazy(() => import('./screens/ProductScreen/ProductScreen'))

function App() {
  return(
    <BrowserRouter>
    {/* <Suspense> */}
     <Routes>
       <Route path="/" element={<HomeScreen/>}/>
       <Route path="/product" element={<ProductScreen/>}/>
       <Route path="/cart" element={<CartScreen/>}/>
 
     </Routes>
    {/* </Suspense> */}
  </BrowserRouter>
  )
}

export default App;
