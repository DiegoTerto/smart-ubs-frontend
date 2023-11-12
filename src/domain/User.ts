export default class User {
  id: string;

  login: string;

  password: string;

  constructor(obj: any = {}) {
    this.id = obj.id || '';
    this.login = obj.login || '';
    this.password = obj.password || '';
  }
}