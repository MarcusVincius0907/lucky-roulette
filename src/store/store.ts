import PostModule from './modules/Posts/store'
import UsersModule from './modules/Users/store'
import { MainMutations } from './mutations'
import { mainState, State } from './state'

export default class MainStore {
  constructor() {
    this.strict = false
    this.state = mainState

    this.mutations = MainMutations

    this.modules = {
      PostModule: PostModule,
      UsersModule: UsersModule
    }
  }

  strict!: boolean
  modules: any
  state!: State
  mutations: any
  actions: any
  getters: any
}
