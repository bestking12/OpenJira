import { useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'

import { EntryCard } from './'

import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'

import { EntryStatus } from '../../interfaces'

import styles from './EntryList.module.css'

interface EntryListProps {
  status: EntryStatus
}

export const EntryList: React.FC<EntryListProps> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, endDragging } = useContext(UIContext)

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  )

  const onDropEntry = (e: React.DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text')
    const entry = entries.find((e) => e._id === id)

    if (!entry) return
    entry.status = status
    updateEntry(entry)
    endDragging()
  }

  const onDragOverEntry = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div
      onDrop={onDropEntry}
      onDragOver={onDragOverEntry}
      style={{ height: '100%' }}
      className={isDragging ? styles.dragging : ''}
    >
      <Paper
        sx={{
          height: '100%',
          overflow: 'auto',
          backgroundColor: 'transparent',
          padding: '1px 5px'
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  )
}
