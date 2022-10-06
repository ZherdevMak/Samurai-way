import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppStateType, AppDispatch } from '../Redux/ReduxStore'

export const useAppDispatch = () => useDispatch<AppDispatch>() // Already knows the state is `RootState`
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector // Already knows that `dispatch` can accept a thunk
