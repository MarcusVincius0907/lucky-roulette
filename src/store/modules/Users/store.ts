import { UserAction } from './actions'
import { UsersMutations } from './mutations'
import { UsersState } from './state'

const UsersModule = {
  state: UsersState,
  mutations: UsersMutations,
  actions: UserAction,
}

export default UsersModule
