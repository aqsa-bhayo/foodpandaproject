import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deliveryInfo: null, // Store delivery information here
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    setDeliveryInfo(state, action) {
      state.deliveryInfo = action.payload;
    },
  },
});

export const { setDeliveryInfo } = deliverySlice.actions;
export default deliverySlice.reducer;
