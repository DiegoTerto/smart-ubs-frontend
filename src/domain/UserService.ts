import User from "./User";

export default class UserService {
  public static login(user: User) {
    return fetch('/api/user', {
      method: 'POST',
      headers: {"Content-type": "application/json", "Access-Control-Allow-Origin": "*"},
      body: JSON.stringify(user)
    }).then((response) => response.json())
  }
}