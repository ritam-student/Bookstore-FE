import { createSlice } from "@reduxjs/toolkit";

import Swal from 'sweetalert2'




const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState : initialState,
    reducers : {
        addItem : (state , action) => {
            const isAlreadyExist = state.cartItems.find((item) => item._id === action.payload._id);
            if(!isAlreadyExist){
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item added successfully...",
                    showConfirmButton: false,
                    timer: 1500
                });
            }else {
                Swal.fire({
                    title: "Item already exist...",
                    icon: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK"
                  });
            }

            
        },
        deleteItem : (state , action ) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            Swal.fire({
                title: "Deleted!",
                text: "Your record has been deleted.",
                icon: "success"
              });
        },
        clearAllItems : (state) => {
            state.cartItems = [];  
            Swal.fire({
                title: "Deleted!",
                text: "Your all records have been deleted.",
                icon: "success"
            });
                  
        }
    }
});

export const {addItem , deleteItem , clearAllItems } = cartSlice.actions;

export default cartSlice.reducer;