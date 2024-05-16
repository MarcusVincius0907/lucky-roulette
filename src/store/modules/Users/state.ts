import { LightUser } from "../../../types/User"

export interface UsersModuleState {
  userList: Array<LightUser>
}

export const UsersState: UsersModuleState = {
  userList: []
}
