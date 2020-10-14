<template>
    <div class="main-sidebar">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand sidebar-gone-show"><nuxt-link to="/">Nuxt-Stisla</nuxt-link></div>
            <ul class="sidebar-menu">
                <li class="menu-header">Dashboard</li>
                <li :class="(this.$route.name == 'admin-dashboard') ? 'active':''">
                    <nuxt-link class="nav-link" to="/"><i class="fas fa-fire"></i><span>Dashboard</span></nuxt-link>
                </li>
                <li :class="(this.$route.name == 'test') ? 'active':''">
                    <nuxt-link class="nav-link" to="/test"><i class="fas fa-wrench"></i><span>Test Page</span></nuxt-link>
                </li>
                <li class="menu-header">Starter</li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link has-dropdown" data-toggle="dropdown"><i class="fas fa-columns"></i> <span>Layout</span></a>
                    <ul class="dropdown-menu">
                        <li :class="(this.$route.name == 'blank') ? 'active':''"><nuxt-link class="nav-link" to="/">Dashboard</nuxt-link></li>
                        <li :class="(this.$route.name == 'blank') ? 'active':''"><nuxt-link class="nav-link" to="/layout/transparent">Transparent Sidebar</nuxt-link></li>
                        <li :class="(this.$route.name == 'blank') ? 'active':''"><nuxt-link class="nav-link" to="/layout/top-layout">Top Navigation</nuxt-link></li>
                    </ul>
                </li>
                <li :class="(this.$route.name == 'blank') ? 'active':''">
                    <nuxt-link class="nav-link" to="/blank"><i class="far fa-square"></i><span>Blank Page</span></nuxt-link>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>