import { Observable } from 'rxjs'

import { PING } from '../actions/action-types'
import { letPong } from '../actions/ping-pong'

export default action$ =>
  action$.ofType(PING)
    .mergeMap(action =>
      Observable.of(letPong())
        .delay(action.duration)
    )
