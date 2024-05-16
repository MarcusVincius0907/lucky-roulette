import { UsersModuleState } from './state'
import { LightUser } from '../../../types/User'

export enum MutationsType {
  SET_USER_LIST = 'SET_USER_LIST',
}

export const UsersMutations = {
  [MutationsType.SET_USER_LIST](state: UsersModuleState, value: Array<LightUser>) {
    state.userList = [...value]
  },
}
