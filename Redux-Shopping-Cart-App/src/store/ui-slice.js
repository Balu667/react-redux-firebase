import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:"ui",
    initialState:{
        notification:{}
    },
    reducers:{
        showNotification(state,action){
            return {notification:{open: action.payload.open,
            message:action.payload.message,
           type:action.payload.type}
        }
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;