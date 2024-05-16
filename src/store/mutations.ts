import { State } from './state'

export enum MutationsType {
  SET_LOADER = 'SET_LOADER',
  SET_COMMUNITY_STATUS = 'SET_COMMUNITY_STATUS' 
}

export const MainMutations = {
  [MutationsType.SET_LOADER](state: State, value: boolean) {
    state.loading = value
  },
  [MutationsType.SET_COMMUNITY_STATUS](state: State, value: boolean) {
    state.communityNotFound = value
  },
}
