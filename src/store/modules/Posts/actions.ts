import { State } from '../../state'
import { ActionContext } from 'vuex'
import { PostModuleState} from './state'
import { MutationsType } from './mutations'
import { covertPostToLightPost } from '../../../helpers/post.helper'
import { MutationsType as MainMutationsType } from '../../mutations'

export enum ActionTypes {
  GET_POSTS_LIST = 'GET_POSTS_LIST',
}

export const PostAction = {
  async [ActionTypes.GET_POSTS_LIST](context: ActionContext<PostModuleState, State>, community: string, limit: number) {
    context.commit(MainMutationsType.SET_LOADER, true)

    const PostService = await import('../../../services/postsService')

    const postService = new PostService.default()

    const resp = await postService.getPosts(community, limit)

    if(resp?.error){
      context.commit(MainMutationsType.SET_COMMUNITY_STATUS, true)
    } else if (resp) {
      context.commit(MutationsType.SET_POST_LIST, [...covertPostToLightPost(resp)])
      context.commit(MainMutationsType.SET_COMMUNITY_STATUS, false)
    }

    context.commit(MainMutationsType.SET_LOADER, false)
  },
  
}
