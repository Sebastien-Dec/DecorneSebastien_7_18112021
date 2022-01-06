import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

  state: {
    user: {}
  },

  mutations: {
    
    
  },

  actions: {
    getAnUser() {
      let token = localStorage.getItem('tokens');
      axios.get('http://localhost:3000/api/auth/getuser', {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      })
        .then(function(user) {
          this.user = user
          console.log("data user", user)
        })
        .catch(error => {
          console.log("error store user", error)
        });
    }
  },
  
  modules: {
  }
})
