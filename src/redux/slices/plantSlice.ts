import { createSlice } from '@reduxjs/toolkit';
import { Plant } from '../../types';
import { plantsData } from '../../data/plants';

interface PlantState {
  plants: Plant[];
}

const initialState: PlantState = {
  plants: plantsData,
};

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {},
});

export default plantSlice.reducer;