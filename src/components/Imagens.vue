<template>
    <div>
        <div class="row-plans">
            <images-card></images-card>
            <label class="tam-max c-pewter pl-30">*Tamanho máximo de 2mb. Formato png ou jpg.</label>
        </div>
        <div class="row-images mt-50">
            <wine-card></wine-card>
        </div>
    </div>
    </div>
</template>

<script>
  import WineCard from 'components/WineCard'
  import ImagesCard from 'components/ImagesCard'
  export default {
    components: {
      WineCard,
      ImagesCard
    }
  }
</script>
