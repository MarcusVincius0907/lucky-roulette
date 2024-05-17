import { User } from "../../../types/User"

export interface UsersModuleState {
  userList: Array<User>
}

export const UsersState: UsersModuleState = {
  userList: []
}
