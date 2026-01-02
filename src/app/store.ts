import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '@/features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    post: postsReducer,
  },
})

export type AppStore = typeof store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
