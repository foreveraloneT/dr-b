import BaseModel from './BaseModel'

export default class Group extends BaseModel {
  _index = 'careInfo'

  _field = {
    date: '',
    debridement: '',
    adjunctive: '',
    oxygenTheraphy: '',
    remark: '',
    patientId: '',
    color: '#000000',
  }
}
