import Person from "./Person";

export default class PersonService {
  public static create(person: Person) {
    return fetch('/api/person', {
      method: 'POST',
      headers: {"Content-type": "application/json", "Access-Control-Allow-Origin": "*"},
      body: JSON.stringify(person)
    }).then((response) => response.json())
  }
}