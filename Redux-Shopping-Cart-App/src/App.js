import React,{useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector,useDispatch} from 'react-redux';
import {Notification} from './components/Notification'
import {uiActions} from './store/ui-slice';

let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const ui = useSelector(state => state.ui);
  console.log(cart.cartItems);
  console.log(ui.notification,"ui");

  useEffect(() => {
    if(isFirstRender){
      isFirstRender = false;
      return;
    }

    const sendRequest = async() => {
      dispatch(uiActions.showNotification({
        open:true,
        message:"sending Request to Databse",
        type:'warning'
      }))
      const res = await fetch("https://react-redux-343a6-default-rtdb.firebaseio.com/cartItems.json",{
        method:"PUT",
        body: JSON.stringify(cart.cartItems)
      });
      const data = await res.json();
      dispatch(uiActions.showNotification({
        open:true,
        message:"sending Request to Database is successfully",
        type:'success'
      }))
      console.log(data);
    }

    sendRequest().catch(err => {
      dispatch(uiActions.showNotification({
        open:true,
        message:"sending Request to Database is failed",
        type:'error'
      }))               
    });

  },[cart]);
 
  return (
    <div className="App">
      {ui.notification.open && <Notification ui={ui.notification} />}
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
