import { PostAction } from './actions'
import { PostMutations } from './mutations'
import { PostState } from './state'

const PostModule = {
  state: PostState,
  mutations: PostMutations,
  actions: PostAction,
}

export default PostModule
