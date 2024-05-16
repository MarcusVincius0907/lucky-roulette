import { PostModuleState } from './modules/Posts/state'
import { UsersModuleState } from './modules/Users/state'

export interface State {
  loading: boolean;
  communityNotFound: boolean;
  PostModule: PostModuleState,
  UserModule: UsersModuleState
}

export const mainState = {
  loading: false,
  communityNotFound: false
} as State
