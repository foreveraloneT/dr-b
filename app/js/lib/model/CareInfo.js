import BaseModel from './BaseModel'

export default class Group extends BaseModel {
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
}
