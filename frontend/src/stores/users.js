import { defineStore } from 'pinia';
import users from '../mocks/users.json';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [],
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      // Получение данных из JSON-файла заменим в последующих разделах
      this.users = users;
    },
  },
});
