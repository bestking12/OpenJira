import { useContext } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

import { UIContext } from '../../context/ui'

import { Entry } from '../../interfaces'

interface EntryCardProps {
  entry: Entry
}

export const EntryCard: React.FC<EntryCardProps> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext)

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id)
    startDragging()
  }

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    endDragging()
  }

  return (
    <Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2' sx={{ whiteSpace: 'pre-line' }}>
            hace 30 min
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
