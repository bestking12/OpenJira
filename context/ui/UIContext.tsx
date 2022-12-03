import { createContext } from 'react'

export interface UIContextProps {
  isSidebarOpen: boolean
  isAddingEntry: boolean
  isDragging: boolean
  openSidebar: () => void
  closeSidebar: () => void
  setIsAddingEntry: (isAdding: boolean) => void
  startDragging: () => void
  endDragging: () => void
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps)
