import { createEpicMiddleware } from 'redux-observable'

import { callStaticAPI, callEventSource } from '../lib/services/epic'
import rootEpic from '../epics'

const dependencies = {
  callStaticAPI,
  callEventSource,
}

export default createEpicMiddleware(rootEpic, { dependencies })
