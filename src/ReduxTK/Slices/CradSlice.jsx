import { createSlice } from "@reduxjs/toolkit";


const AddCard = createSlice(
    {
        name:"AddSlice",
        initialState:[],
        reducers:{
            AddToCard : (state, action)=>{
                return [action.payload]
            }
        }
    }
)
export const {AddToCard} = AddCard.actions
export default AddCard.reducer