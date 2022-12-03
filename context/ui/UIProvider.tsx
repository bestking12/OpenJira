import { useReducer } from 'react'
import { UIContext, uiReducer } from './'

export interface UIState {
  isSidebarOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
}

const initialState: UIState = {
  isSidebarOpen: false,
  isAddingEntry: false,
  isDragging: false
}

interface Props {
  children: React.ReactNode
}

export const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(uiReducer, initialState)

  function openSidebar() {
    dispatch({ type: '[UI] - Open Sidebar' })
  }

  function closeSidebar() {
    dispatch({ type: '[UI] - Close Sidebar' })
  }

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: '[UI] - Set isAddingEntry', payload: isAdding })
  }

  const startDragging = () => {
    dispatch({ type: '[UI] - Start Dragging' })
  }

  const endDragging = () => {
    dispatch({ type: '[UI] - End Dragging' })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setIsAddingEntry,
        startDragging,
        endDragging
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
