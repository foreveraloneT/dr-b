import localforage from 'localforage'
import BaseModel from './BaseModel'

export default class CareInfo extends BaseModel {
  _index = 'careInfo'

  _field = {
    date: '',
    debridement: '',
    adjunctive: '',
    oxygenTherapy: '',
    remark: '',
    patientId: '',
    color: '#000000',
  }

  constructor() {
    super()
    this.deleteByPatientId = this.deleteByPatientId.bind(this)
  }

  async deleteByPatientId(patientId) {
    const dataList = await this.getAll()
    const deletedList = dataList.filter(item => item.patientId !== patientId)
    await localforage.setItem(this._index, deletedList)
    return true
  }
}
