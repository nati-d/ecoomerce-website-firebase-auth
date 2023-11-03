import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    grandTotal:0,
    totalQuantity:0,
    saled:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state, action) => {
            const newItem = action.payload
            const existingItem = state.cartItems.find((item)=> item.id === newItem.id)

            state.totalQuantity++;

            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    name:newItem.name,
                    img:newItem.img,
                    quantity:1,
                    price:newItem.price,
                    total:newItem.price
                })
               
            }
            else{
                existingItem.quantity++;
                existingItem.total = Number(existingItem.total) + Number(newItem.price)
            }
            state.grandTotal = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0);
         
        },

        deleteItem:(state,action) =>{
            const id = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id)

            if(existingItem){
                state.cartItems = state.cartItems.filter((item) => item.id !== id)
                state.totalQuantity = Number(state.totalQuantity) - Number(existingItem.quantity)
                
            }
            state.grandTotal = state.cartItems.reduce((total,item) => total + Number(item.price) * Number(item.quantity),0);

        },
        afterCheck:(state,action) => {
            state.saled = state.totalQuantity + state.saled
            state.cartItems = []
            state.totalQuantity=0
        }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;