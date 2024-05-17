import { State } from '../../state'
import { ActionContext } from 'vuex'
import { MutationsType } from './mutations'
import { UsersModuleState } from './state'
import { User } from '../../../types/User'

export enum ActionTypes {
  ADD_USER = 'ADD_USER',
  GET_USER_BY_ID = 'GET_USER_BY_ID',
  GET_USERS = 'GET_USERS',
  DELETE_BY_ID = 'DELETE_BY_ID',
  UPDATE_BY_ID = 'UPDATE_BY_ID',
}

export const UserAction = {
  async [ActionTypes.ADD_USER](context: ActionContext<UsersModuleState, State>, user: User) {

    const UserService = await import('../../../services/usersService')

    const userService = new UserService.default()

    const resp = userService.addUser(user)

    if (resp) {
      context.commit(MutationsType.SET_USER_LIST, resp)
    }

  },

  async [ActionTypes.GET_USERS](context: ActionContext<UsersModuleState, State>) {

    const UserService = await import('../../../services/usersService')

    const userService = new UserService.default()

    const resp = userService.getUsers()

    if (resp) {
      context.commit(MutationsType.SET_USER_LIST, resp)
    }

  },

  async [ActionTypes.GET_USER_BY_ID](context: ActionContext<UsersModuleState, State>, id: string) {

    const UserService = await import('../../../services/usersService')

    const userService = new UserService.default()

    const resp = userService.getUserById(id)

    if (resp) {
      return resp
    }

  },

  async [ActionTypes.DELETE_BY_ID](context: ActionContext<UsersModuleState, State>, id: string) {

    const UserService = await import('../../../services/usersService')

    const userService = new UserService.default()

    const resp = userService.deleteById(id)

    if (resp) {
      context.commit(MutationsType.SET_USER_LIST, resp)
    }

  },

  async [ActionTypes.UPDATE_BY_ID](context: ActionContext<UsersModuleState, State>, user: User) {

    const UserService = await import('../../../services/usersService')

    const userService = new UserService.default()

    const resp = userService.updateById(user.id, user)

    if (resp) {
      context.commit(MutationsType.SET_USER_LIST, resp)
    }

  }
}