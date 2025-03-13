import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const counterSelector = createSelector((state:RootState)=>state.cart.itemId,(itemId)=>{
const counter = Object.values(itemId).reduce((acc,current)=>acc+current,0)
return counter

})