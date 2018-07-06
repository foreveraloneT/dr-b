import BaseModel from './BaseModel'

export default class Patient extends BaseModel {
  _index = 'patient'

  _field = {
    id: '',
    firstname: '',
    lastname: '',
    fullname: '',
    gender: '',
    yearOfBirth: 0,
    note: '',
    color: '#000000',
    isFavorite: false,
    groupId: '',
  }

  constructor() {
    super()
    this.add = this.add.bind(this)
    this.updateById = this.updateById.bind(this)
    this._enhanceItem = this._enhanceItem.bind(this)
  }

  _enhanceItem(item) {
    const { firstname, lastname, yearOfBirth } = item
    const enhanceItem = {
      ...item,
      fullname: `${firstname} ${lastname}`,
      yearOfBirth: Number(yearOfBirth),
    }
    return enhanceItem
  }

  async add(item) {
    const result = await super.add(this._enhanceItem(item))
    return result
  }

  async updateById(id, updateItem) {
    const result = await super.updateById(id, this._enhanceItem(updateItem))
    return result
  }
}
