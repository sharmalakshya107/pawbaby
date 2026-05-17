import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { StayOptionId } from '@/constants/content/stayOptions'

interface BookingState {
  selectedStayId: StayOptionId | null
}

const initialState: BookingState = {
  selectedStayId: null,
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSelectedStay(state, action: PayloadAction<StayOptionId>) {
      state.selectedStayId = action.payload
    },
    clearSelectedStay(state) {
      state.selectedStayId = null
    },
  },
})

export const { setSelectedStay, clearSelectedStay } = bookingSlice.actions
export default bookingSlice.reducer
