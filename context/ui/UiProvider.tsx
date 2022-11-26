import { UiContext } from './UiContext'
import { FC, ReactNode, useReducer } from 'react'
import { uiReducer } from './uiReducer'

export interface UiState {
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: UiState = {
  isMenuOpen: false,
}

interface Props {
  children: ReactNode
}

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const toggleSideMenu = () => dispatch({ type: '[UI] - ToggleMenu' })

  return (
    <UiContext.Provider value={{ ...state, toggleSideMenu }}>
      {children}
    </UiContext.Provider>
  )
}
