<template>
    <nav class="navbar navbar-expand-lg main-navbar">
        <form class="form-inline mr-auto">
            <ul class="navbar-nav mr-3">
                <li>
                    <a href="#" data-toggle="sidebar" class="nav-link nav-link-lg" ><i class="fas fa-bars"></i></a>
                </li>
                <li>
                    <a href="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none" ><i class="fas fa-search"></i></a>
                </li>
            </ul>
            <div class="search-element">
                <input class="form-control" type="search" :placeholder="$t('header.search.placeholder')" aria-label="Search" data-width="250" />
                <button class="btn" type="submit"> <i class="fas fa-search"></i> </button>
                <div class="search-backdrop"></div>
                <div class="search-result">
                    <div class="search-header">{{ $t('header.search.histories') }}</div>
                    <div class="search-item">
                        <a href="#">How to hack NASA using CSS</a>
                        <a class="search-close" ><i class="fas fa-times"></i ></a>
                    </div>
                    <div class="search-header">{{ $t('header.search.result') }}</div>
                    <div class="search-item">
                        <a href="#">
                            <img class="mr-3 rounded" width="30" src="~/assets/img/products/product-3-50.png" alt="product" />
                            oPhone S9 Limited Edition
                        </a>
                    </div>
                    <div class="search-header">{{ $t('header.search.projects') }}</div>
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
                        {{ $t('header.message.title') }}
                        <div class="float-right">
                            <a href="#">{{ $t('header.message.mark_all') }}</a>
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
                        <a href="" > {{ $t('header.message.view_all') }} <i class="fas fa-chevron-right"></i ></a>
                    </div>
                </div>
            </li>

            <!-- Notifications -->
            <li class="dropdown dropdown-list-toggle">
                <a href="#" data-toggle="dropdown" class="nav-link notification-toggle nav-link-lg" ><i class="far fa-bell"></i ></a>
                <div class="dropdown-menu dropdown-list dropdown-menu-right">
                    <div class="dropdown-header">
                        {{ $t('header.notif.title') }}
                        <div class="float-right">
                            <a href="#">{{ $t('header.message.mark_all') }}</a>
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
                        <a href="" >{{ $t('header.message.view_all') }} <i class="fas fa-chevron-right"></i ></a>
                    </div>
                </div>
            </li>

            <!-- Language Changer -->
            <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="nav-link nav-link-lg" ><i class="fas fa-cog"></i ></a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-title">{{ $t('header.change_language') }}</div>
                    <nuxt-link :to="switchLocalePath('id')" class="dropdown-item has-icon"><strong>ID</strong> Bahasa Indonesia</nuxt-link>
                    <nuxt-link :to="switchLocalePath('en')" class="dropdown-item has-icon"><strong>EN</strong> English </nuxt-link>
                </div>
            </li>

            <!-- Profile Dropdown -->
            <li class="dropdown">
                <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user" >
                    <img alt="image" src="~/assets/img/avatar/avatar-1.png" class="rounded-circle mr-1" />
                    <div class="d-sm-none d-lg-inline-block">
                        Hi, Zucc
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-title">{{ $t('header.login') }} 5 min {{ $t('header.login_when') }}</div>
                    <nuxt-link :to="localePath('profile')" class="dropdown-item has-icon"><i class="far fa-user"></i> {{ $t('header.profile') }}</nuxt-link>
                    <nuxt-link :to="localePath('/profile/activities')" class="dropdown-item has-icon"><i class="fas fa-bolt"></i> {{ $t('header.activities') }} </nuxt-link>
                    <nuxt-link :to="localePath('/admin/settings')" class="dropdown-item has-icon"> <i class="fas fa-cog"></i> {{ $t('header.settings') }} </nuxt-link>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item has-icon text-danger" @click="logout"> <i class="fas fa-sign-out-alt"></i> {{ $t('header.logout') }} </a>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'

export default {
    setup(){
        function logout(){
            this.$store.dispatch('user/setLogin', null);
            this.$router.push('/login')
        }
        return {
            logout
        }
    }
}
</script>

<style>
</style>