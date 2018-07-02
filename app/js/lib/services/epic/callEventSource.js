import Rx from 'rxjs'
import { isEmpty } from 'lodash'

export default ({ url, headers = {}, moreEvent = [] } = {}) =>
  Rx.Observable.create((observer) => {
    /* EventSourcePolyfill is part of event-source-polyfill which config in webpack.config.dev.js & webpack.config.prod.js */
    const source = isEmpty(headers) ?
      new EventSource(url) :
      new EventSourcePolyfill(url, { headers })

    source.onmessage = event => observer.next(event.data)
    source.onerror = event => observer.error(event)

    const onMoreEvent = event => observer.next(event.data)

    moreEvent.forEach((eventName) => {
      source.addEventListener(eventName, onMoreEvent)
    })

    return () => {
      moreEvent.forEach((eventName) => {
        source.removeEventListener(eventName, onMoreEvent)
      })
      source.close()
    }
  })
