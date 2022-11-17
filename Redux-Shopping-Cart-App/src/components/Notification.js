import React from 'react';
import {Alert} from '@mui/material';
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/ui-slice';

export const Notification = ({ui}) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        console.log("close")
      dispatch(uiActions.showNotification({
        open:false
      }))
    }
  return (
    <div>
        <Alert onClose={handleClose} severity={ui.type}>{ui.message}</Alert>
    </div>
  )
}
