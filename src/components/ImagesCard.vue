<template>
  <div>
    <div class="mb-40">
      <div class="images col-md-12">
        <section class="plans-delivery">
          <div v-for="(data, index) in Data" class="logo-site mr-20 fw-500">
            <div v-if="data.id < 6">
              <label :id="'title-'+ data.id" class="c-maroon-flush">{{ data.title }}</label><br><br>
              <div class="card-white">
                <img :src="data.image" :alt="data.title">
              </div>
              <label class="label-logo c-black">{{ data.file }}</label><br>
              <label class="label-logo c-black">{{ Medidas[index].mensage }}</label>
              <input :id="'inputFile-' + data.id" type="file" @change="UploadImage(data.id)"/>
            </div>
          </div>
        </section>
      </div>
      <label class="tam-max c-pewter pl-30">*Tamanho máximo de 2mb. Formato png ou jpg.</label>
      <button class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-100 position--absolute" @click="Save()">
        SALVAR
      </button>
    </div>
  </div>
</template>

<script>
  import getImageApi from '../api/image'

  export default {
    data () {
      return {
        Data: [],
        Medidas: [
          {mensage: 'Medida 186x85px'},
          {mensage: 'Medida 130x90px'},
          {mensage: 'Medida 265x135px'},
          {mensage: 'Medida 265x135px'},
          {mensage: 'Medida 265x135px'}
        ],
        Images: []
      }
    },
    methods: {
      loadImages () {
        getImageApi.getImages().then(response => {
          var jsonObj = JSON.parse(JSON.stringify(response.body))

          for (var key in jsonObj) {
            this.Data.push(jsonObj[key])
            this.Data.sort(function (a, b) {
              return parseFloat(a.id) - parseFloat(b.id)
            })
          }
        })
      },
      UploadImage (index) {
        var listImages = this.Images

        function AddListImage (id, file, image) {
          var obj = {}
          obj.id = id
          obj.title = title
          obj.file = file
          obj.image = image
          listImages.push(obj)
          console.log(listImages)
        }

        // Read File
        var selectedFile = document.getElementById('inputFile-' + index).files
        var title = document.getElementById('title-' + index).textContent

        // Check File is not Empty
        if (selectedFile.length > 0) {
          // Select the very first file from list
          var fileToLoad = selectedFile[0]
          // FileReader function for read the file.
          var fileReader = new FileReader()
          fileReader.fileName = fileToLoad.name

          var name
          var id = index
          var base64

          // Onload of file read the file content
          fileReader.onload = function (fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result
            base64.replace('"', '')
            name = fileLoadedEvent.target.fileName
            // Print data in console
            // console.log(base64 + ' \n ' + name + ' \n ' + id)
            AddListImage(id, name, base64)
          }
          // Convert data to base64
          fileReader.readAsDataURL(fileToLoad)
        }
      },
      Save () {
        var listImages = this.Images
        if (listImages.length > 0) {
          getImageApi.SaveImages(listImages).then(response => {
            console.log(response)
            console.log(response.status)
            window.location.reload()
          }, response => {
            // error callback
          })
        }
      }
    },
    mounted () {
      this.loadImages()
    }
  }

</script>
