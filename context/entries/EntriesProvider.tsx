import { useReducer } from 'react'
import { v4 as uuid } from 'uuid'

import { EntriesContext, entriesReducer } from './'

import { Entry } from '../../interfaces'

export interface EntriesState {
  entries: Entry[]
}

const initialState: EntriesState = {
  entries: [
    {
      _id: uuid(),
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuid(),
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum sit facere, voluptates laudantium numquam odio ipsa quis nihil, doloribus eius fugiat necessitatibus repudiandae, laborum possimus delectus dicta libero soluta.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      _id: uuid(),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aspernatur aperiam corporis obcaecati omnis! Nihil asperiores at porro omnis soluta nesciunt quia ullam, inventore sapiente labore molestiae nam fugiat recusandae. Nihil omnis repellat explicabo laborum perspiciatis, natus laboriosam debitis quasi molestiae eum consectetur nostrum, quia itaque expedita, blanditiis mollitia eligendi excepturi illum id quisquam odit corrupti nisi qui fuga? Veritatis.',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
}

interface Props {
  children: React.ReactNode
}

export const EntriesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState)

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuid(),
      description,
      status: 'pending',
      createdAt: Date.now()
    }

    dispatch({
      type: '[Entry] - Add',
      payload: newEntry
    })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({
      type: '[Entry] - Entry Updated',
      payload: entry
    })
  }

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  )
}
