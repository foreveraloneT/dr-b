import { endsWith } from 'lodash'

export default action$ =>
  action$.filter(action => endsWith(action.type, '_FAILURE') || endsWith(action.type, '_ERROR'))
    .mapTo({ type: 'SOME_ACTION' })
