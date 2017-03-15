<template>
  <div>
    <div class="mb-40">
      <div class="images col-md-12">
        <section class="plans-delivery">
          <div v-for="(data, index) in Data">
            <div v-if="data.id > 5">
              <div class="logo-site mr-20">
                <label class="c-maroon-flush">{{ data.title }}</label><br><br>
                <div class="card-white">
                  <img :src="data.image" :alt="data.title">
                </div>
                <label class="label-logo c-black">{{ data.file }}</label>
                <input :id="'inputFile-' + data.id" type="file" @change="UploadImage(data.id)"/>
                <div class="title-desc">
                  <p class="title">Título</p>
                  <input :id="'inputTitle-' + data.id" type="text" class="title-text" @change="UploadImage(data.id)" :value="data.title"/>
                  <p class="desc">Descrição</p>
                  <textarea :id="'inputDesc-' + data.id" rows="4" class="desc-text" @change="UploadImage(data.id)">{{data.description}}</textarea>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <label class="tam-max c-pewter pl-30">*Tamanho máximo de 2mb. Formato png ou jpg. Medida 70x70px</label>
      <div class="btn-save">
        <button class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-50 position--absolute"
                @click="SaveImages()">
          SALVAR
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import getImageApi from '../api/image'
  export default {
    data () {
      return {
        Data: [],
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
        var isAdded = false

        function AddListImage (id, file, title, description, image) {
          var obj = {}
          obj.id = id
          obj.title = String(title)
          obj.description = String(description)
          obj.file = file
          obj.image = image
          console.log('LENGTH: ' + listImages.length)

          if (listImages !== null && listImages !== 0 && listImages.length > 0) {
            console.log('If')
            for (var i = 0; i < listImages.length; i++) {
              console.log('ID LISTA: ' + listImages[i]['id'])
              console.log('ID: ' + id)
              if (listImages[i]['id'] === id) {
                listImages[i] = obj
                isAdded = true
                console.log('Lista: ')
                console.log(listImages)
                break
              }
            }
            if (!isAdded) {
              listImages.push(obj)
            }
            console.log(listImages)
          } else {
            console.log('Else')
            listImages.push(obj)
            console.log('Item Add: ')
            console.log(listImages)
          }
        }

        // Read File
        var selectedFile = document.getElementById('inputFile-' + index).files
        var inputTitle = document.getElementById('inputTitle-' + index).value
        var inputDes = document.getElementById('inputDesc-' + index).value

        // Check File is not Empty
        if (selectedFile.length >= 0) {
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
            // console.log(base64 + ' \n ' + name + ' \n ' + id + ' \n ' + inputTitle + ' \n ' + inputDes)
            AddListImage(id, name, inputTitle, inputDes, base64)
          }
          // Convert data to base64
          fileReader.readAsDataURL(fileToLoad)
        }
      },

      SaveImages () {
        var listImages = this.Images
        console.log(listImages)
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
