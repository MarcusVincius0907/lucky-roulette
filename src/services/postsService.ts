import { ApiResponse } from '../types/Post'
import BaseService from './baseService'

export default class PostsService {
  private _baseService: BaseService = new BaseService()

  async getPosts(community: string, limit: number = 25): Promise<ApiResponse> {
    try {
      const req = await this._baseService.http.get(`/r/${community}.json?limit=${limit}`)
      return req.data
    } catch (ex) {
      return this._baseService.apiErrorTreatment(ex)
    }
  }

}