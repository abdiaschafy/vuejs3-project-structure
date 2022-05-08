import { defineStore } from 'pinia'

import state from './state'
import getters from './getters'

export const productStore = defineStore({
  id: 'product',
  namespaced: true,
  state,
  getters
})
