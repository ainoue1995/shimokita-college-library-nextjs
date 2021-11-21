import { combineReducers, configureStore } from '@reduxjs/toolkit'
import bookReducer from './slicer/bookSlicer'

const rootReducer = combineReducers({
  book: bookReducer,
})

const store = configureStore({
  reducer: rootReducer,
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
