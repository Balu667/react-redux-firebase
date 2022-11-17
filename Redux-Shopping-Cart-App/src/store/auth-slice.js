import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name:"auth",
    initialState: {isLoggedIn:false},
    reducers:{
        logIn(state){
            return {isLoggedIn : true};
        },
        logOut(state){
           return {isLoggedIn : false};
        }
    }
});

export const actions = authSlice.actions;

export default authSlice;




