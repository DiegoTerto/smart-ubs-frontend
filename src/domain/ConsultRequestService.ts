import CreateConsultRequest from "./CreateConsultRequest";

export default class ConsultRequestService {
  public static create(consultRequest: CreateConsultRequest) {
    return fetch('/api/consult-request', {
      method: 'POST',
      headers: {"Content-type": "application/json", "Access-Control-Allow-Origin": "*"},
      body: JSON.stringify(consultRequest)
    }).then((response) => response.json())
  }
}