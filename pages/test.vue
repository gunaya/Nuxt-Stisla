<template>
    <section class="section">
        <div class="section-header">
            <h1>Map Test</h1>
        </div>

        <div class="card">
            <div class="card-body">
                <vue-editor></vue-editor>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <div id="map"></div>
            </div>
        </div>
    </section>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from '@vue/composition-api';
import { Map } from 'mapbox-gl';

export default {
    layout: 'dashboard',

    setup () {
        const access_token = ref('pk.eyJ1IjoiZ3VuYXlhIiwiYSI6ImNrZnVmdDQ1bzJkaGMycXM1YzRrdzEyNncifQ.7NlbCI5Iv3wuJrGLNzc3_w');
        const map = ref({});

        function createMap(){
            // mapboxgl.accessToken = access_token;
            var map = new Map({
                accessToken: access_token.value,
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                zoom: 11,
                center: [107.6, -6.90]
            })
        }

        onMounted(() => {
            createMap()
        })

        return {
            access_token, map
        }

    }
}
</script>

<style>

</style>