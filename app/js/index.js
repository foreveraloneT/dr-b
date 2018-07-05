import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import * as OfflinePluginRuntime from 'offline-plugin/runtime'

import Root from './Root'
import configureStore from './store/configureStore'

const store = configureStore()
const rootEl = document.getElementById('app')

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
})

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <MuiThemeProvider theme={ theme } >
        <AppContainer>
          <Component />
        </AppContainer>
      </MuiThemeProvider>
    </Provider>,
    rootEl
  )
}

// offline plugin
if (process.env.NODE_ENV === 'production') {
  OfflinePluginRuntime.install()
}

renderApp(Root)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default // eslint-disable-line global-require
    renderApp(NextRoot)
  })
}
