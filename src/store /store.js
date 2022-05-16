import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state={
    added: [],
    all: [
        {   id: 1,
            image: 'https://images.unsplash.com/photo-1518945756765-f8641d60fc0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
            name: 'Venice',
            Price: '114'
          },
          { id:2,
            image: 'https://images.unsplash.com/photo-1567061698906-fc74288ce52a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            name: 'Abstract',
            Price: '150'
          },
          { id:3,
            image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80',
            name: 'Flower',
            Price:'499'
          },
          { id:4,
            image: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
            name: 'Angles',
            Price: '112'
          },
          { id:5,
            image: 'https://images.unsplash.com/photo-1579783483346-b4b3f315096b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1358&q=80',
            name: 'Waiting',
            Price:'25'
          }
    ] 
}
const getters = {
    allProducts: state => state.all,
    getNumberOfProducts: state =>(state.all)? state.all.length: 0,
    cartProducts: state => {
        return state.added.map(({id, quantity}) => {
            const product = state.all.find(p => p.id === id)
            return{
                name: product.name,
                Price: product.Price,
                quantity
            }
        })
    }
}
    const actions ={
        addToCart({commit}, product){
            commit(types.ADD_TO_CART,{
                id: product.id
            })
        }
    }

    const mutations ={
        [types.ADD_TO_CART](state, {id}){
            const record = state.added.find(p => p.id === id)

            if(!record){
                state.added.push({
                    id,
                    quantity: 1
                })
              }
              else {
                  record.quantity++
              }
        }
    }
    export default new Vuex.Store({
        state,
        strict: debug,
        getters,
        actions,
        mutations
    })


