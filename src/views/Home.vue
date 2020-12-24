<template>
  <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
    <div class="sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-12">
      <div  class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <div class="flex">
          <img :src="require('@/assets/nirex.png')" class="h-20 w-30"/><h2 class="flex  px-10 pt-5 lg:text-2xl  md:text-sm sm:text-sm font-bold text-blue-900">La manera mas agil y segura de enviar</h2>
        </div>
        <div v-for="(destination,index) in destinations" :key="index" class="bg-white shadow-md rounded px-8 pt-6 pb-1 mb-2 flex flex-col">
          <div class="-mx-3 md:flex mb-1 ">
            <h3 v-if="index<1" class="md:w-1/2 px-1 mb-2 md:mb-0 text-black font-bold">ORIGEN</h3>
            <h3 v-else class="md:w-1/2 px-1 mb-2 md:mb-0 text-black font-bold">DESTINO {{index}}</h3> 
            <button class="md:w-1/2 px-3 mb-2 md:mb-0 focus:outline-none max-w-xs flex justify-end "  v-if="index!=0" @click="deleteDestination(index)"><img :src="require('@/assets/remove.png')"/></button>
          </div>
          <div class="-mx-3 md:flex mb-1">
            <div class="md:w-full px-3">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-0.5" for="place">
                UBICACION
              </label>
              <gmap-autocomplete
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-1"
                id="place"
                :value="destination.address"
                :select-first-on-enter="true"
                @place_changed="setPlace(index,$event)"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-1">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-0.5" for="company">
                Nombres
              </label>
              <input v-model="destination.name" class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-1" id="company" type="text" placeholder="nombres">
            </div>
            <div class="md:w-1/2 px-3">
              <label class="uppercase tracking-wide text-black text-xs font-bold mb-0.5" for="title">
                DNI
              </label>
              <input v-model="destination.dni" class="w-full bg-gray-200 text-black border border-gray-200 rounded py-1 px-4 mb-3" id="title" type="text" placeholder="75109988">
            </div>
          </div>
          <div class="-mx-3 md:flex mb-1 flex justify-end">
            <button @click="addMarker(index)" class="bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 font-bold focus:ring-opacity-50  text-white p-2 py-2 px-5 rounded-full flex justify-end">
              Save
            </button>
          </div>
        </div>
        <div class="-mx-3 md:flex mt-2">
          <div class="md:w-full px-3">
            <button @click="addDestination" class="md:w-full bg-gray-900 text-white font-bold py-1 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 focus:outline-none rounded-full">
              Agregar destinos
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="p-5">
      <Map :markers="markers" :center="center"/>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    Map: () => import("@/components/Map")
  },
  data() {
    return {
      destinations:[{
        address:'',
        name:'',
        dni:'',
        aux:''
      }],
      center: { lat: -12.043954, lng: -77.035544 },
      markers: []
    }
  },
  methods: {
    addDestination() {
      this.destinations.push({
        address:'',
        name:'',
        dni:''
      })
    },
    setPlace(index,place) {
      this.destinations[index].aux = place
      this.destinations[index].address = place.formatted_address;
    },
    deleteDestination(index) {
      this.destinations.splice(index,1)
      this.markers.splice(index,1)
    },
    addMarker(index) {
      let place = []
      
      place = this.markers.filter((item,counter) => counter === index)
      if(place.length) {
        this.markers[index].position.lat = this.destinations[index].aux.geometry.location.lat()
        this.markers[index].position.lng = this.destinations[index].aux.geometry.location.lng()
        return 
      }

      if (this.destinations[index].aux) {
        const marker = {
          lat: this.destinations[index].aux.geometry.location.lat(),
          lng: this.destinations[index].aux.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.center = marker;
      }
    }
  }
}
</script>