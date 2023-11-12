import User from "./User";

export default class Person {
  id: string;

  name: string;

  email: string;

  document: string;

  birthDate: string;

  sex: string;

  cardSUSNumber: string;

  users: User;

  phone: string;

  constructor(obj: any = {}) {
    this.id = obj.id || '';
    this.name = obj.name || '';
    this.email = obj.email || '';
    this.document = obj.document || '';
    this.birthDate = obj.birthDate || '';
    this.sex = obj.sex || '';
    this.cardSUSNumber = obj.cardSUSNumber || '';
    this.users = obj.users || new User();
    this.phone = obj.phone || '';
  }
}