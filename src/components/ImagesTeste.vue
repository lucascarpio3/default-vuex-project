<template>
  <div>
    <div v-for="data in Data">
      <img :src="data.image" :alt="data.title">
      <label class="label-6 c-black">{{ data.title }}</label>
    </div>
  </div>
</template>

<script>
  import getImageApi from '../api/image'

  export default {
    data () {
      return {
        Data: []

      }
    },
    methods: {
      loadImages () {
        getImageApi.getImages().then(response => {
          var jsonObj = JSON.parse(JSON.stringify(response.body))

          for (var key in jsonObj) {
            this.Data.push(jsonObj[key])
            // console.log(jsonObj[key].title)
          }
        })
      }
    },
    mounted () {
      this.loadImages()
    }
  }

</script>

