<template>
    <section class="section">
        <div class="section-header">
            <h1>Blank Page</h1>
        </div>

        <div class="section-body">
        </div>
    </section>
</template>

<script>
export default {
    middleware: 'notAuthenticate',
    layout: 'dashboard'
}
</script>

<style>

</style>