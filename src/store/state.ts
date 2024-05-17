import { UsersModuleState } from './modules/Users/state'

export interface State {
  loading: boolean;
  communityNotFound: boolean;
  UsersModule: UsersModuleState
}

export const mainState = {
  loading: false,
  communityNotFound: false
} as State
