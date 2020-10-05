<template>
    <div>
        <Spinner />
    </div>
</template>

<script>
export default {
    middleware: 'isAuth',
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>