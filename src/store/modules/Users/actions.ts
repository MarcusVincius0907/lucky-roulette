import { State } from '../../state'
import { ActionContext } from 'vuex'
import { MutationsType } from './mutations'
import { UsersModuleState } from './state'
import { covertUserToLightUser } from '../../../helpers/user.helper'
import { MutationsType as MainMutationsType } from '../../mutations'

export enum ActionTypes {
  GET_USER_BY_NAME = 'GET_USER_BY_NAME',
}

export const UserAction = {
  async [ActionTypes.GET_USER_BY_NAME](context: ActionContext<UsersModuleState, State>, userName: string) {
    context.commit(MainMutationsType.SET_LOADER, true)

    const UserService = await import('../../../services/usersService')

    const userService = new UserService.default()

    const resp = await userService.getUser(userName)

    if (resp) {
      context.commit(MutationsType.SET_USER_LIST, [...context.state.userList, covertUserToLightUser(resp)])
    }

    context.commit(MainMutationsType.SET_LOADER, false)
  },
  
}
