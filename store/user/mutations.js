import { is } from "core-js/fn/object";

export default {
    SET_USERDATA(state, user_data) {
        state.user_data = user_data;
    },

    SET_LOGIN(state, is_login) {
        state.is_login = is_login;
    }
}