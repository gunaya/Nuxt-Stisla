<template>
    <div id="app">
        <div class="main-wrapper">
            <div class="navbar-bg"></div>
            <app-header></app-header>

            <app-sidebar></app-sidebar>

            <div class="main-content">
                <nuxt/>
            </div>

            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import AppHeader from '~/components/core-2/Header';
import AppSidebar from '~/components/core-2/Sidebar';
import AppFooter from '~/components/core-2/Footer';

export default {
    components: {
        AppHeader, AppSidebar, AppFooter
    },
    head() {
        return {
            script: [
                { src: '/js/stisla.js' },
                { src: '/js/scripts.js' },
                { src: '/js/custom.js' }
            ],
            bodyAttrs : {
                class: 'layout-2'
            }
        }
    }
}
</script>

<style>

</style>