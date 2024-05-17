import { User } from '../types/User'
import { v4 as uuidv4 } from 'uuid';

export default class UsersService {
  private _users: User[] = []
  private _storageKey = 'USERS_LUCKY_ROULETTE'

  constructor() {
    try {
      this._users = JSON.parse(localStorage.getItem(this._storageKey) || "") || []
    } catch (e) {
      this._users = []
    }
  }

  private _updateStorage() {
    localStorage.setItem(this._storageKey, JSON.stringify(this._users));
  }

  addUser(user: User) {
    user.id = uuidv4();
    this._users.push(user);
    this._updateStorage()

    return this._users
  }

  updateById(id: string, user: User) {
    this._users = this._users.filter(user => user.id !== id)

    return this.addUser(user)
  }

  getUsers() {
    return this._users;
  }

  getUserById(id: string) {
    return this._users.find(user => user.id === id)
  }

  deleteById(id: string) {
    this._users = this._users.filter(user => user.id !== id)
    this._updateStorage();

    return this._users
  }

}