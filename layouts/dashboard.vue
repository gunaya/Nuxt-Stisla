<template>
    <div class="main-wrapper">
        <div class="navbar-bg"></div>

        <app-header></app-header>

        <app-sidebar></app-sidebar>

        <div class="main-content">
            <nuxt/>
        </div>

        <app-footer></app-footer>
    </div>
</template>

<script>
import AppHeader from '../components/core/Header';
import AppSidebar from '~/components/core/Sidebar';
import AppFooter from '~/components/core/Footer';

export default {
    components: {
        AppHeader,
        AppSidebar,
        AppFooter
    },
    head() {
        return {
            script: [
                { src: '/js/stisla.js' },
                { src: '/js/scripts.js' },
                { src: '/js/custom.js' }
            ],
        }
    }
}
</script>

<style>

</style>