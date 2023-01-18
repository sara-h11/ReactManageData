import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'components/counter/counterSlice'
import taskReducer from 'components/tasks/task.slice';
import postReduer from 'features/posts/post.slice';
import authReducer from 'features/auth/auth.slice';

export const store = configureStore({
  reducer: {
    counterState : counterReducer,
    taskListState : taskReducer,
    posts : postReduer,
    auth : authReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch