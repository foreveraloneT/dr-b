import { ajax } from 'rxjs/observable/dom/ajax'

const getParamsQuery = (params = {}) => (
  params === {} ? '' :
    Object.keys(params).reduce((query, param) => (
      `${query}${param}=${params[param]}&`
    ), '?').slice(0, -1)
)

export default ({ url, method, body = {}, headers = { 'Content-Type': 'application/json' } }) => {
  if (method !== 'GET') {
    return ajax({ url, body, method, responseType: 'json', headers, crossDomain: true, })
  }

  const getUrl = url + getParamsQuery(body)
  return ajax({ url: getUrl, method, responseType: 'json', headers, crossDomain: true, })
}
