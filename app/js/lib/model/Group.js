import BaseModel from './BaseModel'

export default class Group extends BaseModel {
  _index = 'group'

  _field = {
    name: '',
    description: '',
    color: '#000000',
    isFavorite: false,
  }
}
