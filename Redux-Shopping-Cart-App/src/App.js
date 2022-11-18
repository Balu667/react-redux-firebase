import React,{useEffect,useDeepCompareEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector,useDispatch} from 'react-redux';
import {Notification} from './components/Notification'
import {uiActions} from './store/ui-slice';
import {fetchData, sendCartData} from './store/cart-actions';

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const ui = useSelector(state => state.ui);

  console.log("app component is render",cart)
 
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false;
      return;
    }

   if(cart.changed){
    dispatch(sendCartData(cart))
   }

  },[cart.cartItems]);
 
  return (
    <div className="App">
      {ui.notification.open && <Notification ui={ui.notification} />}
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
