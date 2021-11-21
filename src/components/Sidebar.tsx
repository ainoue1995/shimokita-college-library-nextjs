import MenuBookIcon from '@mui/icons-material/MenuBook'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Theme,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { ActiveLink } from '~/components/ActiveLink'

const drawerWidth = 320

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#181A39',
    color: '#fff',
  },
  projectWrap: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
  },
  projectIconWrap: {
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    marginRight: theme.spacing(2),
    width: 40,
  },
  projectIcon: {
    color: '#181A39',
    fontSize: 36,
  },
  projectName: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  projectMenuWrap: {
    marginLeft: theme.spacing(2),
  },
  menuSection: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(3),
    },
  },
  subheader: {
    color: '#BEC3D2',
    fontSize: 14,
  },
  menuIconWrap: {
    marginRight: theme.spacing(2),
  },
}))

const guideList = [
  { text: 'ガイドレシピ', path: '/index/', icon: <MenuBookIcon /> },
  { text: 'ガイドレシピ', path: '/index/', icon: <MenuBookIcon /> },
]

export const Sidebar: React.VFC = () => {
  const classes = useStyles()
  // const { projectList, currentProject } = useProject()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.projectWrap}>
        <p className={classes.projectName}>test</p>
      </div>
      <List>
        <section className={classes.menuSection}>
          <ListSubheader className={classes.subheader}>ガイド</ListSubheader>
          {guideList.map((item, index) => (
            <ActiveLink href={item.path} key={index} disabled>
              <ListItem button>
                <div className={classes.menuIconWrap}>{item.icon}</div>
                <ListItemText primary={item.text} />
              </ListItem>
            </ActiveLink>
          ))}
        </section>
      </List>
    </Drawer>
  )
}
