import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      idc: 7,  
      items: [
          {
              id:0,
              type:'tea',
              name:'Adrak Tea',
              price:15,
              qty:0
          },
          {
            id:1,
            type:'tea',
            name:'Normal Tea',
            price:10,
            qty:0
        },
        {
            id:2,
            type:'tea',
            name:'Masala Tea',
            price:20,
            qty:0
        },
        {
            id:3,
            type:'tea',
            name:'Green Tea',
            price:12,
            qty:0
        },
        {
            id:4,
            type:'coffee',
            name:'Normal coffee',
            price:15,
            qty:0
        },
        {
          id:5,
          type:'coffee',
          name:'Cold coffee',
          price:20,
          qty:0
      },
      {
          id:6,
          type:'coffee',
          name:'Choclate spe',
          price:25,
          qty:0
      },
      {
          id:7,
          type:'coffee',
          name:'Mocha coffee',
          price:30,
          qty:0
      }
      ]
    },
    mutations: {
        addItem(state, payload){
            state.items = [...state.items,payload];
        },
        incId(state){
            state.idc +=1;
        },
        removeItem(state, id){
            state.items = state.items.filter( (el)=> el.id!=id);
        }
    },
    getters: {

    },
    actions: {
        getId (context){
            context.commit('incId');
        },
        addItem ( {commit}, payload){
            commit('addItem',payload);
        },
        removeItem( {commit}, id){
            commit('removeItem',id);
        }
    }
  })

export default store;