<template>
  <div>
    <gmap-map ref="mapRef"
      :center="center"
      :zoom="12"
      style="width:100%;height: 850px;"
    >
      <gmap-marker
        :key="index"
        v-for="(maker, index) in markers"
        :position="maker.position"
        @click="center=maker.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  import {gmapApi} from 'vue2-google-maps';
  export default {
    name: "GoogleMap",
    props:{
      markers:Array,
      center:Object
    }
  };
</script>