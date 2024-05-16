import { ApiResponse } from '../types/User'
import BaseService from './baseService'

export default class PostsService {
  private _baseService: BaseService = new BaseService()

  async getUser(userName: string): Promise<ApiResponse> {
    try {
      const req = await this._baseService.http.get(`/user/${userName}/about.json`)
      return req.data
    } catch (ex) {
      return this._baseService.apiErrorTreatment(ex)
    }
  }

}