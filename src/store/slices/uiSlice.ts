import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  mobileNavVisible: boolean
  scrollLocked: boolean
}

const initialState: UiState = {
  mobileNavVisible: true,
  scrollLocked: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileNavVisible(state, action: PayloadAction<boolean>) {
      state.mobileNavVisible = action.payload
    },
    setScrollLocked(state, action: PayloadAction<boolean>) {
      state.scrollLocked = action.payload
    },
  },
})

export const { setMobileNavVisible, setScrollLocked } = uiSlice.actions
export default uiSlice.reducer
