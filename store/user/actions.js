export default {
    async setUserdata({commit}, user_data){
        commit("SET_USERDATA", user_data);
    },

    async setLogin({commit}, is_login){
        commit("SET_LOGIN", is_login);
    }
}