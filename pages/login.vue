<template>
    <div id="app">
        <section class="section">
            <div class="container mt-5">
                <div class="col-12 col-sm-8 offset-sm-2 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                    <div class="login-brand">
                        <img src="~/assets/img/stisla-fill.svg" alt="Login Logo" width="100" class="shadow-light rounded-circle">
                    </div>

                    <div class="card card-primary">
                        <div class="card-header">
                            <h4>Login</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input id="username" type="username" :class="(validation.username) ? 'form-control':'form-control is-invalid' " name="username" tabindex="1" required autofocus v-model="login_info.username">
                                <div class="invalid-feedback">
                                    Wrong username
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="d-block">
                                    <label for="password" class="control-label">Password</label>
                                    <div class="float-right">
                                        <a href="auth-forgot-password.html" class="text-small">
                                        Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <input id="password" type="password" :class="(validation.password) ? 'form-control':'form-control is-invalid' " name="password" tabindex="2" required v-model="login_info.password">
                                <div class="invalid-feedback">
                                    Wrong password
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me">
                                    <label class="custom-control-label" for="remember-me">Remember Me</label>
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4" @click="loginFunc">
                                    Login
                                </button>
                            </div>
                            
                        </div>
                    </div>

                    <div class="mt-5 text-muted text-center">
                        Don't have an account? <nuxt-link to="/register">Create One</nuxt-link>
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
        const login_info = reactive({
            username: 'admin',
            password: 'admin'
        })

        const validation = reactive({
            username: true,
            password: true
        })

        function loginFunc(){
            validation.username = true;
            validation.password = true;

            if (login_info.username != 'admin') {
                validation.username = false
            }
            if(login_info.password != 'admin') {
                validation.password = false
            }

            if(!validation.username || !validation.password){
                return false;
            }

            this.$store.dispatch('user/setUserdata', login_info);
            this.$store.dispatch('user/setLogin', 1);

            this.$router.push('/')
        }
    
        return {
            login_info, validation,
            loginFunc
        }
    }
}
</script>

<style lang="scss" scoped>

</style>