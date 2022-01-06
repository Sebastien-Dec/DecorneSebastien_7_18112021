import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

export default createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],

  state: {
    publications: {},
    date: {
      day: '',
      month: '',
      year: '',
      hour: '',
      minutes: '',
      seconds:''
      } 
  },

  mutations: {
    
    
  },

  actions: {
    date() {
      let token = localStorage.getItem("tokens")
      axios.get('http://localhost:3000/api/publications', {
          headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + token
          }
      })
          .then(publications => {
              this.publications = publications.data;
              console.log("publications", publications.data);
              return;
          })
          .catch(error => console.log(error));
    }
  },
  
  modules: {
  },
})
