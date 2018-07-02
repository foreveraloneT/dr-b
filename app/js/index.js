import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Root from './Root'
import configureStore from './store/configureStore'

const store = configureStore()
const rootEl = document.getElementById('app')

const theme = createMuiTheme({
  palette: {
    type: 'dark',
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

renderApp(Root)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default // eslint-disable-line global-require
    renderApp(NextRoot)
  })
}
