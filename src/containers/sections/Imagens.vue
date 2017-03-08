<template>
    <div>
        <div class="row-plans">
            <images-card></images-card>
            <images-card-desc></images-card-desc>
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
  import ImagesCardDesc from 'components/ImagesCardDesc'
  export default {
    components: {
      WineCard,
      ImagesCard,
      ImagesCardDesc
    }
  }
</script>
