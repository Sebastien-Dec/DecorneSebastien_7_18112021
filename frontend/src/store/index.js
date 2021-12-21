import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    user: {
      id: '',
      username: '',
      email: '',
      type: '',
      createdAt: '',
      updatedAt: ''
    }
  },
  mutations: {
    
    
  },
  actions: {
    getAnUser: function() {
      axios.get('http://localhost:3000/api/auth/getuser', this.user)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        });
    }
  },
  modules: {
  }
})
