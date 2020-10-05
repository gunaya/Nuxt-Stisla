<template>
    <div id="app">
        <section class="section">
            <div class="container mt-5">
                <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                    <div class="login-brand">
                        <img src="~/assets/img/stisla-fill.svg" alt="Login Logo" width="100" class="shadow-light rounded-circle">
                    </div>

                    <div class="card card-primary">
                        <div class="card-header">
                            <h4>Register</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group col-6">
                                    <label for="first_name">First Name</label>
                                    <input id="first_name" type="text" class="form-control" name="first_name" autofocus>
                                </div>
                                <div class="form-group col-6">
                                    <label for="last_name">Last Name</label>
                                    <input id="last_name" type="text" class="form-control" name="last_name">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="username">Username</label>
                                <input id="username" type="username" :class="(validation.username) ? 'form-control':'form-control is-invalid' " name="username" v-model="register_info.username">
                                <div class="invalid-feedback">
                                    Insert Username
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-6">
                                    <label for="password" class="d-block">Password</label>
                                    <input id="password" type="password" :class="(validation.password) ? 'form-control':'form-control is-invalid' " data-indicator="pwindicator" name="password" v-model="register_info.password">
                                    <div id="pwindicator" class="pwindicator">
                                        <div class="bar"></div>
                                        <div class="label"></div>
                                    </div>
                                    <div class="invalid-feedback">
                                        Insert password
                                    </div>
                                </div>
                                <div class="form-group col-6">
                                    <label for="password2" class="d-block">Password Confirmation</label>
                                    <input id="password2" type="password" :class="(validation.pass_confirm) ? 'form-control':'form-control is-invalid' " name="password-confirm" v-model="register_info.pass_confirm">
                                    <div class="invalid-feedback">
                                        Password doesn't match
                                    </div>
                                </div>
                            </div>

                            <div class="form-divider">
                                Your Home
                            </div>
                            <div class="row">
                                <div class="form-group col-6">
                                    <label>Country</label>
                                    <select class="form-control selectric">
                                        <option>Indonesia</option>
                                        <option>Palestine</option>
                                        <option>Syria</option>
                                        <option>Malaysia</option>
                                        <option>Thailand</option>
                                    </select>
                                </div>
                                <div class="form-group col-6">
                                    <label>Province</label>
                                    <select class="form-control selectric">
                                        <option>West Java</option>
                                        <option>East Java</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-6">
                                    <label>City</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-6">
                                    <label>Postal Code</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" name="agree" class="custom-control-input" id="agree">
                                    <label class="custom-control-label" for="agree">I agree with the terms and conditions</label>
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-lg btn-block" @click="registerFunc">
                                    Register
                                </button>
                            </div>
                            
                        </div>
                    </div>

                    <div class="mt-5 text-muted text-center">
                        Already have an account? <nuxt-link to="/login">Sign in Here</nuxt-link>
                    </div>
                    <div class="simple-footer">
                        Copyright &copy; Nuxt-Stisla 2020
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'

export default {
    middleware({ store, redirect }) {
        if (store.state.user.is_login == 1) {
            return redirect('/')
        }
    },
    setup () {
        const register_info = reactive({
            username: null,
            password: null,
            pass_confirm: null
        })

        const validation = reactive({
            username: true,
            password: true,
            pass_confirm: true
        })

        function registerFunc(){
            validation.username = true;
            validation.password = true;
            validation.pass_confirm = true;

            if (!register_info.username) {
                validation.username = false
            }
            if(!register_info.password) {
                validation.password = false
            }
            if(register_info.pass_confirm != register_info.password) {
                validation.pass_confirm = false
            }

            if(!validation.username || !validation.password || !validation.pass_confirm){
                return false;
            }

            this.$store.dispatch('user/setUserdata', register_info);
            this.$store.dispatch('user/setLogin', 1);

            this.$router.push('/')
        }
    
        return {
            register_info, validation, registerFunc
        }
    }
}
</script>

<style lang="scss" scoped>

</style>