/* globals Store */
import api from './backend-api'

export default {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1]
    let data = 'username=' + email + '&password=' + pass
    api.login('token', data).then((res) => {
      const token = res.access_token || res.data.access_token
      const user = res.user || res.data.user
      Store.dispatch('user/updateUser', {
        user,
        token
      })
      if (cb) cb(new Error(true, null))
      this.onChange(true)
    }, (err) => {
      console.log(err)
      if (cb) cb(new Error(false, err))
      this.onChange(false)
    })
  },
  getToken() {
    return Store.state.user.token
  },
  logout(cb) {
    // delete localStorage.token
    // Store.commit('setToken', null)
    Store.dispatch('user/logout')
    if (cb) cb(new Error(false, null))
    this.onChange(false)
  },
  loggedIn() {
    return !!Store.state.user.token
  },
  onChange() {}
}
