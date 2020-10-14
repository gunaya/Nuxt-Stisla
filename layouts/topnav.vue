<template>
    <div id="app">
        <div class="main-wrapper container">
            <div class="navbar-bg"></div>
            <app-header></app-header>

            <app-topnav></app-topnav>

            <div class="main-content">
                <nuxt/>
            </div>

            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import AppHeader from '../components/core-3/Header';
import AppTopnav from '~/components/core-3/Topnav';
import AppFooter from '~/components/core-3/Footer'

export default {
    components: {
        AppHeader,
        AppTopnav,
        AppFooter
    },
    head() {
        return {
            // script: [
            //     { src: '/js/stisla.js' },
            //     { src: '/js/scripts.js' },
            //     { src: '/js/custom.js' }
            // ],
            bodyAttrs : {
                class: 'layout-3'
            }
        }
    }
}
</script>

<style>

</style>