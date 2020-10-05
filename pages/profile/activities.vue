<template>
    <section class="section">
        <div class="section-header">
            <h1>Activities</h1>
            <div class="section-header-breadcrumb">
                <div class="breadcrumb-item active"> <nuxt-link to="/profile">Profile</nuxt-link> </div>
                <div class="breadcrumb-item">Activities</div>
            </div>
        </div>
        <div class="section-body">
            <h2 class="section-title"> {{ $moment(date).format('MMMM YYYY') }} </h2>
            <div class="row">
                <div class="col-12">
                    <div class="activities">
                        <div class="activity" v-for="(activity, index) in activities" :key="index">
                            <div class="activity-icon bg-primary text-white shadow-primary">
                                <i class="fas fa-comment-alt"></i>
                            </div>
                            <div class="activity-detail">
                                <div class="mb-2">
                                    <span class="text-job text-primary">{{ $moment(activity['datetime']).fromNow() }}</span>
                                    <span class="bullet"></span>
                                    <a class="text-job" href="#">View</a>
                                    <div class="float-right dropdown">
                                        <a href="#" data-toggle="dropdown"><i class="fas fa-ellipsis-h"></i></a>
                                        <div class="dropdown-menu">
                                            <div class="dropdown-title">Options</div>
                                            <a href="#" class="dropdown-item has-icon"><i class="fas fa-eye"></i> View</a>
                                            <a href="#" class="dropdown-item has-icon"><i class="fas fa-list"></i> Detail</a>
                                            <div class="dropdown-divider"></div>
                                            <a href="#" class="dropdown-item has-icon text-danger" data-confirm="Wait, wait, wait...|This action can't be undone. Want to take risks?" data-confirm-text-yes="Yes, IDC"><i class="fas fa-trash-alt"></i> Archive</a>
                                        </div>
                                    </div>
                                </div>
                                <p>{{activity['activity']}}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'

export default {
    middleware: 'notAuthenticate',
    layout: 'dashboard',
    setup () {
        const date = ref(new Date().toJSON().slice(0,10).replace(/-/g,'-'))
        const activities = ref([
            { datetime: '2020-10-04 15:00', activity: 'Mengubah tampilan profile, manghapus menu sidebar yang tidak perlu' },
            { datetime: '2020-10-04 15:23', activity: 'Memperbaiki bug pada dashboard' },
        ])
    
        return {
            date, activities
        }
    }
}
</script>

<style lang="scss" scoped>

</style>