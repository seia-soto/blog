import { createStore, AnyAction, Store } from 'redux'
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper'

export interface IState {
  useDarkTheme: boolean
}

export const reducer = (
  state: IState = {
    useDarkTheme: false
  },
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state
      }
    case 'switch.darkTheme': {
      return {
        ...state,
        useDarkTheme: !!state.useDarkTheme
      }
    }
    default:
      return state
  }
}

export const makeStore = (context: Context) => createStore(
  reducer
)

export const wrapper = createWrapper<Store<IState>>(makeStore, { debug: true })
