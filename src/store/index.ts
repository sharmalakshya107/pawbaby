import { configureStore } from '@reduxjs/toolkit'
import bookingReducer from '@/store/slices/bookingSlice'
import uiReducer from '@/store/slices/uiSlice'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    booking: bookingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
