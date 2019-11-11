import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        shouList:[]
    },

    getters:{

    },

    mutations:{
        addListShouList(state,obj) {
            // console.log(obj)
          let shai = state.shouList.filter((item)=>{
              return item.dynamicid=obj.dynamicid
          })
         
          if(shai.length==0){
            state.shouList.push(obj);
          }
        },
    },

    action:{
       
    }
})
