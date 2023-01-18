import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'views/components/counter/counterSlice'
import taskReducer from 'views/components/tasks/task.slice';
import postReduer from 'views/features/posts/post.slice';
import authReducer from 'views/features/auth/auth.slice';

export const store = configureStore({
  reducer: {
    counterState : counterReducer,
    taskListState : taskReducer,
    postState : postReduer,
    authState : authReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch