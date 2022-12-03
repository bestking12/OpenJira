import { EntriesState } from './'

import { Entry } from '../../interfaces'

type EntriesAction =
  | { type: '[Entry] - Add'; payload: Entry }
  | { type: '[Entry] - Entry Updated'; payload: Entry }

export const entriesReducer = (state: EntriesState, action: EntriesAction): EntriesState => {
  switch (action.type) {
    case '[Entry] - Add':
      return { ...state, entries: [...state.entries, action.payload] }
    case '[Entry] - Entry Updated':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.description = action.payload.description
            entry.status = action.payload.status
          }
          return entry
        })
      }
    default:
      return state
  }
}
