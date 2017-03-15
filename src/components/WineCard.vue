<template>
  <div>
    <div class="wine-card">
      <div v-for="(data, index) in Data">
        <div class="explorador c-maroon-flush mr-20 pl-30">
          <label class="c-maroon-flush">{{ Planos[index].plano }}</label><br><br>
          <div class="card-white-wine">
            <img :src="data.image">
          </div>
          <div class="label-logo c-black pt-10">
            <label class="label-logo c-black">{{ data.file }}</label>
            <input :id="'inputImgWine-' + data.id" type="file" @change="UploadImage(data.id)"/>
          </div>
          <div class="title-desc">
            <p class="title">Marca</p>
            <input :id="'inputMarca-' + data.id" type="text" class="title-text" @change="UploadImage(data.id)"
                   :value="data.brand"/>
            <p class="desc">Descrição</p>
            <textarea :id="'inputDesc-' + data.id" rows="4" @change="UploadImage(data.id)" class="desc-text">{{data.description}}</textarea>
            <p class="desc">Região</p>
            <input :id="'inputRegiao-' + data.id" type="text" class="title-text" @change="UploadImage(data.id)"
                   :value="data.region"/>
          </div>
        </div>
      </div>
    </div>
    <br>
    <label class="tam-max c-pewter pl-30">*Tamanho máximo de 2mb. Formato png ou jpg. Medida 165x590px</label>
    <br>
    <div class="btn-save">
      <button class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-140 position--absolute"
              @click="SaveImages()"> SALVAR
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
        Planos: [
          {plano: 'Explorador'},
          {plano: 'Seleção'},
          {plano: 'Jóias'}
        ],
        Images: []
      }
    },
    methods: {
      loadImages () {
        getImageApi.getWines().then(response => {
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
        var name
        var id = index
        var base64

        function AddListImage (id, brand, description, file, region, image) {
          var obj = {}
          obj.id = id
          obj.brand = String(brand)
          obj.description = String(description)
          obj.file = file
          obj.region = String(region)
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
        var selectedFile = document.getElementById('inputImgWine-' + index).files
        var inputMarca = document.getElementById('inputMarca-' + index).value
        var inputDesc = document.getElementById('inputDesc-' + index).value
        var inputRegiao = document.getElementById('inputRegiao-' + index).value
        // console.log(inputMarca + '\n' + inputDesc + '\n' + inputRegiao)
        console.log(document.getElementById('inputFile-' + index))
        // Check File is not Empty
        if (selectedFile.length >= 0) {
          // Select the very first file from list
          var fileToLoad = selectedFile[0]
          console.log(fileToLoad)
          // FileReader function for read the file.
          var fileReader = new FileReader()

          fileReader.fileName = fileToLoad.name

          // Onload of file read the file content
          fileReader.onload = function (fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result
            base64.replace('"', '')
            name = fileLoadedEvent.target.fileName
            // Print data in console
            // console.log(base64 + ' \n ' + name + ' \n ' + id + ' \n ' + inputTitle + ' \n ' + inputDes)

            AddListImage(id, inputMarca, inputDesc, name, inputRegiao, base64)
          }
          // Convert data to base64
          fileReader.readAsDataURL(fileToLoad)
        }
      },

      SaveImages () {
        var listImages = this.Images
        console.log(listImages)
        if (listImages.length > 0) {
          getImageApi.SaveWines(listImages).then(response => {
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
