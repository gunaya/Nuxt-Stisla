<template>
    <section class="section">
        <div class="section-header">
            <h1>{{ $t('profile.section_header') }}</h1>
        </div>
        <div class="section-body">
            <div class="row mt-sm-4">
                <div class="col-12 col-md-12 col-lg-5">
                    <div class="card profile-widget">
                        <div class="profile-widget-header">
                            <img src="~/assets/img/avatar/avatar-1.png" alt="Profile Pict." class="rounded-circle profile-widget-picture">
                            <div class="profile-widget-items">
                                <div class="profile-widget-item">
                                    <div class="profile-widget-item-label">{{ $t('profile.post') }}</div>
                                    <div class="profile-widget-item-value">999</div>
                                </div>
                                <div class="profile-widget-item">
                                    <div class="profile-widget-item-label">{{ $t('profile.follower') }}</div>
                                    <div class="profile-widget-item-value">999M</div>
                                </div>
                                <div class="profile-widget-item">
                                    <div class="profile-widget-item-label">{{ $t('profile.following') }}</div>
                                    <div class="profile-widget-item-value">0</div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-widget-description">
                            <div class="profile-widget-name"> {{ profile.first_name }} <div class="text-muted d-inline font-weight-normal"><div class="slash"></div> {{ profile.job }}</div></div>
                            {{ profile.bio }}
                        </div>
                        <div class="card-footer text-center">
                            <div class="font-weight-bold mb-2">{{ $t('profile.follow') }} {{ profile.first_name }} {{ $t('profile.follow_on') }}</div>
                            <a href="#" class="btn btn-icon btn-dark mr-1">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="btn btn-icon btn-dark mr-1">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="btn btn-icon btn-dark mr-1">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="btn btn-icon btn-dark">
                                <i class="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-7">
                    <div class="card">
                        <div class="card-header">
                            <h4>{{ $t('profile.edit.title') }}</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group col-md-6 col-12">
                                    <label>{{ $t('profile.edit.first_name') }}</label>
                                    <input type="text" class="form-control" v-model="profile.first_name">
                                </div>
                                <div class="form-group col-md-6 col-12">
                                    <label>{{ $t('profile.edit.last_name') }}</label>
                                    <input type="text" class="form-control" v-model="profile.last_name">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-7 col-12">
                                    <label>{{ $t('profile.edit.email') }}</label>
                                    <input type="email" class="form-control" v-model="profile.email" required="">
                                </div>
                                <div class="form-group col-md-5 col-12">
                                    <label>{{ $t('profile.edit.phone') }}</label>
                                    <input type="tel" class="form-control" v-model="profile.phone">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-12">
                                    <label>{{ $t('profile.edit.bio') }}</label>
                                    <vue-editor :initialValue='profile.bio' initialEditType="wysiwyg" ref="toastuiEditor"></vue-editor>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group mb-0 col-12">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" name="remember" class="custom-control-input" id="newsletter">
                                        <label class="custom-control-label" for="newsletter">{{ $t('profile.edit.subs') }}</label>
                                        <div class="text-muted form-text">
                                            {{ $t('profile.edit.subs_info') }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-right">
                            <button class="btn btn-primary">{{ $t('button.update') }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive, toRefs, onMounted } from '@vue/composition-api'

export default {
    middleware: 'notAuthenticate',
    layout: 'dashboard',
    nuxtI18n: {
        paths: {
            id: '/profil',
            en: '/profile'
        }
    },

    setup () {
        const profile = reactive({
            first_name: 'Zucc',
            last_name: '',
            email: 'zucc@example.com',
            phone: '081234567890',
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                +"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                +"but also the leap into electronic typesetting, remaining essentially unchanged.",
            job: 'Full-Stack Web Developer'
        })

        onMounted(() => {
            
        })
    
        return {
            profile
        }
    }
}
</script>

<style lang="scss" scoped>

</style>