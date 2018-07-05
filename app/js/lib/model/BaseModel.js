import localforage from 'localforage'
import moment from 'moment'
import { pick } from 'lodash'

export default class BaseModel {
  _index = 'base'

  _field = {}

  _scope = () => {
    return Object.keys(this._field)
  }

  _getId = () => {
    return Math.random().toString(36).substr(2, 16)
  }

  _getNow = () => {
    return moment().format('x')
  }

  getAll = async () => {
    const data = await localforage.getItem(this._index)
    return data || []
  }

  getById = async (id) => {
    const dataList = await this.getAll()
    const result = dataList.filter(item => item._id === id)
    return result.length > 0 ? result[0] : null
  }

  add = async (item) => {
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

  updateById = async (id, updateItem) => {
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

  deleteById = async (id) => {
    const dataList = await this.getAll()
    const deletedList = dataList.filter(item => item._id !== id)
    await localforage.setItem(this._index, deletedList)
    return true
  }
}
