<template>
    <div id="app">
        <div class="main-wrapper">
            <div class="navbar-bg"></div>
            <nav class="navbar navbar-expand-lg main-navbar">
                <nuxt-link to="/" class="navbar-brand sidebar-gone-hide">Nuxt-Stisla</nuxt-link>
                <div class="navbar-nav">
                    <a href="#" class="nav-link sidebar-gone-show" data-toggle="sidebar"><i class="fas fa-bars"></i></a>
                </div>
                <div class="nav-collapse">
                    <a class="sidebar-gone-show nav-collapse-toggle nav-link" href="#">
                        <i class="fas fa-ellipsis-v"></i>
                    </a>
                    <ul class="navbar-nav">
                        <li class="nav-item active"><a href="#" class="nav-link">Application</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Report Something</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Server Status</a></li>
                    </ul>
                </div>
                <form class="form-inline ml-auto">
                    <ul class="navbar-nav">
                        <li><a href="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none"><i class="fas fa-search"></i></a></li>
                    </ul>
                <div class="search-element">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
                        <button class="btn" type="submit"> <i class="fas fa-search"></i> </button>
                        <div class="search-backdrop"></div>
                        <div class="search-result">
                            <div class="search-header">Histories</div>
                            <div class="search-item">
                                <a href="#">How to hack NASA using CSS</a>
                                <a class="search-close" ><i class="fas fa-times"></i ></a>
                            </div>
                            <div class="search-header">Result</div>
                            <div class="search-item">
                                <a href="#">
                                    <img class="mr-3 rounded" width="30" src="~/assets/img/products/product-3-50.png" alt="product" />
                                    oPhone S9 Limited Edition
                                </a>
                            </div>
                            <div class="search-header">Projects</div>
                            <div class="search-item">
                                <a href="#">
                                    <div class="search-icon bg-danger text-white mr-3">
                                        <i class="fas fa-code"></i>
                                    </div>
                                    Stisla Admin Template
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
                <ul class="navbar-nav navbar-right">

                    <!-- Message -->
                    <li class="dropdown dropdown-list-toggle">
                        <a href="#" data-toggle="dropdown" class="nav-link nav-link-lg message-toggle beep" ><i class="far fa-envelope"></i></a>
                        <div class="dropdown-menu dropdown-list dropdown-menu-right">
                            <div class="dropdown-header">
                                Messages
                                <div class="float-right">
                                    <a href="#">Mark All As Read</a>
                                </div>
                            </div>
                            <div class="dropdown-list-content dropdown-list-message">
                                <a class="dropdown-item dropdown-item-unread">
                                    <div class="dropdown-item-avatar">
                                        <img alt="image" src="~/assets/img/avatar/avatar-2.png" class="rounded-circle" />
                                    </div>
                                    <div class="dropdown-item-desc">
                                        <b>Dedik Sugiharto</b>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit
                                        </p>
                                        <div class="time">12 Hours Ago</div>
                                    </div>
                                </a>
                            </div>
                            <div class="dropdown-footer text-center">
                                <a href="" >View All <i class="fas fa-chevron-right"></i ></a>
                            </div>
                        </div>
                    </li>

                    <!-- Notifications -->
                    <li class="dropdown dropdown-list-toggle">
                        <a href="#" data-toggle="dropdown" class="nav-link notification-toggle nav-link-lg beep" ><i class="far fa-bell"></i ></a>
                        <div class="dropdown-menu dropdown-list dropdown-menu-right">
                            <div class="dropdown-header">
                                Notifications
                                <div class="float-right">
                                    <a href="#">Mark All As Read</a>
                                </div>
                            </div>
                            <div class="dropdown-list-content dropdown-list-icons">
                                <a class="dropdown-item dropdown-item-unread">
                                    <div class="dropdown-item-icon bg-primary text-white" >
                                        <i class="fas fa-code"></i>
                                    </div>
                                    <div class="dropdown-item-desc">
                                        Template update is available now!
                                        <div class="time text-primary">2 Min Ago</div>
                                    </div>
                                </a>
                                <a class="dropdown-item">
                                    <div class="dropdown-item-icon bg-danger text-white">
                                        <i class="fas fa-exclamation-triangle"></i>
                                    </div>
                                    <div class="dropdown-item-desc">
                                        Low disk space. Let's clean it!
                                        <div class="time">17 Hours Ago</div>
                                    </div>
                                </a>
                                <a class="dropdown-item">
                                    <div class="dropdown-item-icon bg-info text-white">
                                        <i class="fas fa-bell"></i>
                                    </div>
                                    <div class="dropdown-item-desc">
                                        Welcome to Stisla template!
                                        <div class="time">Yesterday</div>
                                    </div>
                                </a>
                            </div>
                            <div class="dropdown-footer text-center">
                                <a href="" >View All <i class="fas fa-chevron-right"></i ></a>
                            </div>
                        </div>
                    </li>

                    <!-- Profile Dropdown -->
                    <li class="dropdown">
                        <a href="" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user" >
                            <img alt="image" src="~/assets/img/avatar/avatar-1.png" class="rounded-circle mr-1" />
                            <div class="d-sm-none d-lg-inline-block">
                                Hi, Zucc
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                            <div class="dropdown-title">Logged in 5 min ago</div>
                            <nuxt-link to="/profile" class="dropdown-item has-icon"><i class="far fa-user"></i> Profile</nuxt-link>
                            <nuxt-link to="/profile/activities" class="dropdown-item has-icon"><i class="fas fa-bolt"></i> Activities </nuxt-link>
                            <nuxt-link to="/admin/settings" class="dropdown-item has-icon"> <i class="fas fa-cog"></i> Settings </nuxt-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item has-icon text-danger" @click="logout"> <i class="fas fa-sign-out-alt"></i> Logout </a>
                        </div>
                    </li>
                </ul>
            </nav>

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

            <div class="main-content">
                <nuxt/>
            </div>

            <footer class="main-footer">
                <div class="footer-left">
                    Copyright &copy; 2020 <div class="bullet"></div> Converted With <i class="fas fa-heart"></i> By <a href="https://github.com/gunaya">Gunaya</a>
                </div>
                <div class="footer-right">1.0.0</div>
            </footer>
        </div>
    </div>
</template>

<script>
// import AppHeader from '~/components/core2/Header2';
// import AppSidebar from '~/components/core2/Sidebar2';
// import AppFooter from '~/components/core2/Footer2';

export default {
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