import { PostModuleState } from './state'
import { LightPost } from '../../../types/Post'

export enum MutationsType {
  SET_POST_LIST = 'SET_POST_LIST',
}

export const PostMutations = {
  [MutationsType.SET_POST_LIST](state: PostModuleState, value: Array<LightPost>) {
    state.postsList = value
  },
}
