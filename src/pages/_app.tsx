import { CssBaseline, ThemeProvider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import { Provider } from 'react-redux'
import store from '~/store/store'
import { HeaderLogo } from '../components/HeaderLogo'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar'
import theme from '../lib/theme'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(0, 0, 8),
    minHeight: '100vh',
  },
  contentWrapper: {
    display: 'block',
    width: '100%',
  },
}))

const blankLayoutPaths = [
  '/openwith',
  '/openwithguide',
  '/signin',
  '/maintainance',
  '/404',
]

const App = ({ Component, pageProps }: AppProps) => {
  const classes = useStyles()
  const { pathname, push } = useRouter()
  const [shouldShowSidebar] = React.useMemo(() => {
    return [!blankLayoutPaths.includes(pathname)]
  }, [pathname])

  React.useEffect(() => {
    console.log(
      'NEXT_PUBLIC_SLACK_CLIENT_ID',
      process.env.NEXT_PUBLIC_SLACK_CLIENT_ID,
    )
    console.log(
      'NEXT_PUBLIC_SLACK_CLIENT_ID',
      process.env.NEXT_PUBLIC_SLACK_CLIENT_SECRET,
    )

    if (pathname === '/') {
      // push('/books')
    }
  }, [pathname, push])

  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <SessionProvider>
              <CssBaseline />
              <div className={classes.root}>
                {shouldShowSidebar ? <Sidebar /> : <HeaderLogo />}
                <div className={classes.contentWrapper}>
                  <main className={classes.content}>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </main>
                </div>
              </div>
            </SessionProvider>
          </ThemeProvider>
        </Provider>
      )}
    </div>
  )
}
export default App
