import React from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'

import { Navbar, Sidebar } from '../ui'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

export const Layout = ({ title = 'OpenJira', children }: LayoutProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: '10px 20px' }} component='main'>
        {children}
      </Box>
    </Box>
  )
}
