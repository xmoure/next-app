import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemons';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
//import { localStorageMiddleware } from './middlewares/localStorage-middleware';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
 /*  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: localStorageMiddleware,
      },
      serializableCheck: false,
    }), */
})

export type RootState =  ReturnType<typeof store.getState>;

export type AppDispatch =  typeof store.dispatch;


// Use throughout your app instead of plain `useDispatch` and `useSelector`
/* export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>() */


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
