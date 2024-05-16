import { LightPost } from "../../../types/Post"

export interface PostModuleState {
  postsList: Array<LightPost>
  community: string,
}

export const PostState: PostModuleState = {
  postsList: [],
  community: 'computerscience'
}
