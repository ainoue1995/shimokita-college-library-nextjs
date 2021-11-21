import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    padding: theme.spacing(4, 10),
    backgroundColor: 'transparent',
  },
}))

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const classes = useStyles()
  return <div className={classes.layout}>{children}</div>
}
