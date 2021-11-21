import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { CommonImage } from './CommonImage'

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: 'transparent',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: theme.spacing(1.5),
  },
}))

export function HeaderLogo() {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <CommonImage
        src="/shimokita-college-logo.png"
        width={200}
        alt="SHIMOKITA-COLLEGE"
      />
    </header>
  )
}
