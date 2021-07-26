import http from './axios';
import { EndPoint } from './endPoints';


export async function getCountryDetails() {
 return await http.get(EndPoint.countryUrl)
 }

 export async function getEmployeeDetail(requestBody) {
 return await http.post(EndPoint.empUrl, requestBody)
 }