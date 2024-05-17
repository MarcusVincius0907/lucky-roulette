import { UsersModuleState } from './state'
import { User } from '../../../types/User'

export enum MutationsType {
  SET_USER_LIST = 'SET_USER_LIST',
}

export const UsersMutations = {
  [MutationsType.SET_USER_LIST](state: UsersModuleState, value: Array<User>) {
    state.userList = [...value]
  },
}
