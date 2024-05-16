import axios, { AxiosInstance } from 'axios'
import ResponseDefault from '../types/ResponseDefault'

export default class BaseService {
  public http: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
    })

    //We can add some interceptor code h
  }

  public apiErrorTreatment(exception: any): ResponseDefault {
    if (exception?.response?.data) {
      return exception.response.data as ResponseDefault
    } else {
      return new ResponseDefault(exception.response?.status, exception.message, exception.payload)
    }
  }
}