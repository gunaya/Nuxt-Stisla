<template>
    <div class="main-sidebar">
        <aside id="sidebar-wrapper">
            <div class="sidebar-brand">
                <!-- <a href="/">Stisla</a -->
                <nuxt-link to="/">Nuxt-Stisla</nuxt-link>
            </div>
            <div class="sidebar-brand sidebar-brand-sm">
                <nuxt-link to="/">N-St</nuxt-link>
            </div>
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
                        <li><a class="nav-link" href="layout-default.html">Default Layout</a></li>
                        <li><a class="nav-link" href="layout-transparent.html">Transparent Sidebar</a></li>
                        <li><a class="nav-link" href="layout-top-navigation.html">Top Navigation</a></li>
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
    created() {
        // console.log(this.$route)
    },
};
</script>
