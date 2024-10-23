import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../components/features/sliderSlice'

export const store = configureStore({
  reducer: {
    slider: sliderReducer
  },
})