import localforage from 'localforage'
import moment from 'moment'
import { pick } from 'lodash'

export default class BaseModel {
  _index = 'base'

  _field = {}

  constructor() {
    this._scope = this._scope.bind(this)
    this._getId = this._getId.bind(this)
    this._getNow = this._getNow.bind(this)
    this.getAll = this.getAll.bind(this)
    this.getById = this.getById.bind(this)
    this.add = this.add.bind(this)
    this.updateById = this.updateById.bind(this)
    this.deleteById = this.deleteById.bind(this)
  }

  _scope() {
    return Object.keys(this._field)
  }

  _getId() {
    return Math.random().toString(36).substr(2, 16)
  }

  _getNow() {
    return moment().format('x')
  }

  async getAll() {
    const data = await localforage.getItem(this._index)
    return data || []
  }

  async getById(id) {
    const dataList = await this.getAll()
    const result = dataList.filter(item => item._id === id)
    return result.length > 0 ? result[0] : null
  }

  async add(item) {
    const dataList = await this.getAll()
    const enhanceItem = {
      _id: this._getId(),
      createAt: this._getNow(),
      updateAt: 0,
      isSync: false,
      ...this._field,
      ...pick(item, this._scope()),
    }
    await localforage.setItem(this._index, [...dataList, enhanceItem])
    return enhanceItem
  }

  async updateById(id, updateItem) {
    const dataList = await this.getAll()
    let updatedItem
    dataList.forEach((item, order) => {
      if (item._id === id) {
        dataList[order] = {
          ...item,
          ...pick(updateItem, this._scope()),
          updateAt: this._getNow(),
          isSync: false,
        }
        updatedItem = dataList[order]
      }
    })
    await localforage.setItem(this._index, dataList)
    return updatedItem || false
  }

  async deleteById(id) {
    const dataList = await this.getAll()
    const deletedList = dataList.filter(item => item._id !== id)
    await localforage.setItem(this._index, deletedList)
    return true
  }
}
