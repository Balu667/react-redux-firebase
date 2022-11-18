import React,{useEffect,useDeepCompareEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector,useDispatch} from 'react-redux';
import {Notification} from './components/Notification'
import {uiActions} from './store/ui-slice';
import { sendCartData} from './store/cart-actions';
import {fetchData,updateData} from './store/cart-slice'

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const ui = useSelector(state => state.ui);

 
 
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  console.log("app component is render",cart)

  // useEffect(() => {
  //   if(isFirstRender){
  //     isFirstRender = false;
  //     return;
  //   }

  //  if(cart.changed){
  //   // dispatch(updateData(cart.cartItems))
  //  }

  // },[cart.cartItems]);


 
  return (
    <div className="App">
      {ui.notification.open && <Notification ui={ui.notification} />}
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
