<template>
    <div id="map"></div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from '@vue/composition-api';
import { Map } from 'mapbox-gl';

export default {
    layout: 'dashboard',
    props: ['long', 'lat', 'zoom'],
    setup (props) {
        const access_token = ref('pk.eyJ1IjoiZ3VuYXlhIiwiYSI6ImNrZnVmdDQ1bzJkaGMycXM1YzRrdzEyNncifQ.7NlbCI5Iv3wuJrGLNzc3_w');
        const map = ref({});

        function createMap(){
            // mapboxgl.accessToken = access_token;
            var map = new Map({
                accessToken: access_token.value,
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                zoom: props.zoom,
                center: [props.long, props.lat]
            })
        }

        onMounted(() => {
            createMap()
        })
    }
}
</script>

<style lang="scss" scoped>

</style>