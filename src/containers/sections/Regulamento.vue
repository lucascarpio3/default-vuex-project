<template>

  <div class="regulation pl-100">
    <div class="fileUpload bkg-maroon-flush btn mt-40 btn--flat pd-18 btn-default br-15 c-white">
      <span>UPLOAD</span>
      <input id="InputFile" class="upload" type="file" @change="UploadDoc()"/>
    </div>
    <label class="tam-max block mv-5 c-pewter">* Tamanho máximo de 5mb. Formato pdf.</label>
    <iframe class="pdf-shower block"
            :src="data.image" width="800px"
            height="580px" style="border: none;"></iframe>
    <label class="regulation-name c-pewter">{{ title }}</label>
  </div>
</template>

<script>
  import RegulationApi from '../../api/regulation'

  export default {
    data () {
      return {
        data: '',
        listPdf: []
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      LoadPage () {
        RegulationApi.getRegulation(10).then(response => {
          var jsonObj = JSON.parse(JSON.stringify(response.body))
          this.data = jsonObj
          this.title = this.data.title
        })
      },
      UploadDoc () {
        var pdf = this.listPdf

        function AddListRegulation (file, image) {
          var obj = {}
          obj.id = 10
          obj.file = file
          obj.title = file
          obj.image = image
          pdf.push(obj)
          console.log(pdf)

          if (pdf.length > 0) {
            RegulationApi.SaveRegulation(pdf).then(response => {
              console.log(response)
              console.log(response.status)
              window.location.reload()
            }, response => {
              // error callback
            })
          }
        }

        // Read File
        var selectedFile = document.getElementById('InputFile').files
        console.log(selectedFile)
        // Check File is not Empty
        if (selectedFile.length > 0) {
          // Select the very first file from list
          var fileToLoad = selectedFile[0]
          // FileReader function for read the file.
          var fileReader = new FileReader()
          fileReader.fileName = fileToLoad.name

          var name
          var base64

          // Onload of file read the file content
          fileReader.onload = function (fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result
            base64.replace('"', '')
            name = fileLoadedEvent.target.fileName
            // Print data in console
            // console.log(base64 + ' \n ' + name + ' \n ' + id)
            AddListRegulation(name, base64)
          }
          // Convert data to base64
          fileReader.readAsDataURL(fileToLoad)
        }
      }
    },
    mounted () {
      this.LoadPage()
    }
  }

</script>

