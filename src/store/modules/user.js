import { imageCodeAPI, loginAPI } from '@/api'

export default {
  namespaced: true,

  state: {
    code: '',
    token: '',
    data: {}
    // hrsaasTime: 0
  },

  mutations: {
    SET_CODE(state, code) {
      state.code = code
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_DATA(state, data) {
      state.data = data
    },
    REMOVE_TOKEN(state) {
      state.token = ''
    },
    REMOVE_DATA(state) {
      state.data = {}
    }
  },

  actions: {
    // 切换验证码
    async changeCodeActions({ commit }, randomNum) {
      const code = await imageCodeAPI(randomNum)
      commit('SET_CODE', code.data)
    },
    // 登录请求
    async loginAction({ commit }, loginData) {
      const { data } = await loginAPI(loginData)
      commit('SET_TOKEN', data.token)
      commit('SET_DATA', data)
      console.log(data)
    },
    logout({ commit }) {
      commit('REMOVE_TOKEN'),
      commit('REMOVE_DATA')
    }

  }

}
