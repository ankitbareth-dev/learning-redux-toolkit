import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '@/features/posts/postsSlice'
import usersReducer from '@/features/users/usersSlice'
import authReducer from '@/features/auth/authSlice'
import notificationReducer from '@/features//notifications/notificationsSlice'

import { listenerMiddleware } from './listenerMiddleware'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})

export type AppStore = typeof store

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
