import * as types from './mutation-types'

export default {
  [types.INIT_MENU] (state, menu) {
    state.topMenu = menu
  },
  [types.ACTIVE_MENU] (state, menu) {
    state.activedMenu = menu
  },
  [types.ACTIVE_THIRD_MENU] (state, menu) {
    state.thirdMenu = menu
  },
  [types.INIT_DICT] (state, dictList) {
    state.dictList = dictList
  }
}
