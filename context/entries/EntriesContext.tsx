import { createContext } from 'react'
import { Entry } from '../../interfaces'

export interface EntriesContextProps {
  entries: Entry[]
  addNewEntry: (description: string) => void
  updateEntry: (entry: Entry) => void
}

export const EntriesContext = createContext<EntriesContextProps>({} as EntriesContextProps)
