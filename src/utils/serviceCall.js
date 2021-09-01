import http from './axios';
import { EndPoint } from './endPoints';


export async function getCountryDetails(requestBody) {
 return await http.get(EndPoint.countryUrl, requestBody)
 }

 export async function getEmployeeDetail(requestBody) {
 return await http.post(EndPoint.empUrl, requestBody)
 }

 export async function gethome(requestBody) {
 return await http.post(EndPoint.tradeUrl, requestBody)
 }


 export async function getList(requestBody) {
 return await http.post(EndPoint.tradeList, requestBody)
 }


export async function getProfile(requestBody) {
return await http.post(EndPoint.tradeProfile, requestBody)
}