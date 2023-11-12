export default class CreateConsultRequest {
  patientId: string | null;

  realizationConsultDate: string;

  priority: string;

  details: string;

  speciality: string;

  constructor(obj: any = {}) {
    this.patientId = obj.patientId || ''
    this.realizationConsultDate = obj.realizationConsultDate || ''
    this.priority = obj.priority || ''
    this.details = obj.details || ''
    this.speciality = obj.speciality || ''
  }
}