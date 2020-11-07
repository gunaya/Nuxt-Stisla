<template>
    <section class="section">
        <div class="section-header">
            <h1>{{ $t('pages.blank') }}</h1>
        </div>

        <div class="section-body">
            {{ $t('hello') }}
        </div>
    </section>
</template>

<script>
export default {
    middleware: 'notAuthenticate',
    layout: 'dashboard',
    nuxtI18n: {
        paths: {
            id: '/halaman-kosong',
            en: '/blank'
        }
    },
}
</script>

<style>

</style>