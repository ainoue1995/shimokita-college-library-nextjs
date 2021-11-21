import { makeStyles } from '@mui/styles'
import Link from 'next/link'
import React from 'react'
import { useRouter } from '~/hooks/useRouter'

interface Props {
  children: React.ReactElement
  href: string
  replace?: boolean
  disabled?: boolean
}

const useStyles = makeStyles({
  base: {
    '&:hover': {
      backgroundColor: '#2A315D',
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: '#2A315D',
    },
  },
  active: {
    backgroundColor: '#2A315D',
  },
  disable: {
    backgroundColor: '#181A39',
    color: '#6F7696',
    cursor: 'not-allowed',
  },
})

export const ActiveLink: React.VFC<Props> = ({
  children,
  disabled,
  href,
  ...props
}) => {
  const classes = useStyles()
  const router = useRouter()
  const child = React.Children.only(children)
  const childClassName = child.props.className || ''

  const classNames = [childClassName, classes.base]
  if (router.asPath === href) {
    classNames.push(classes.active)
  }
  if (disabled) {
    classNames.push(classes.disable)
  }

  return (
    <Link href={!disabled ? href : ''} {...props}>
      {React.cloneElement(child, {
        className: classNames.join(' ') || null,
      })}
    </Link>
  )
}
