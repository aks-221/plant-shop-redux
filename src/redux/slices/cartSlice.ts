import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Plant } from '../../types';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plant>) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.plant.id === plant.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ plant, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const plantId = action.payload;
      const item = state.items.find(item => item.plant.id === plantId);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const plantId = action.payload;
      const itemIndex = state.items.findIndex(item => item.plant.id === plantId);
      
      if (itemIndex >= 0) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const plantId = action.payload;
      state.items = state.items.filter(item => item.plant.id !== plantId);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;