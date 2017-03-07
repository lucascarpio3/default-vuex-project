<template>
    <div>
        <div class="row-plans">
            <div class="images col-md-12">
                <section class="plans-delivery">
                    <div class="logo-site c-maroon-flush mr-20">Logo Site <br><br>
                        <div class="bg-white">
                        <img src="../assets/images/logo_confraria-do-vinho.png">
                        </div>
                        <div class="label-logo c-black">confrariadovinho.png</div>
                    </div>
                    <div class="logo-kmV c-maroon-flush mr-20">Logo KmV <br><br>
                        <div class="bg-white">
                        <img src="../assets/images/kmv.png">
                        </div>
                        <div class="label-kmV c-black">kmv.png</div>
                    </div>
                    <div class="duas-garrafas c-maroon-flush mr-20">2 Garrafas <br><br>
                        <div class="bg-white">
                        <img src="../assets/images/2garrafas.png">
                        </div>
                        <div class="label-2 c-black">2garrafas.png</div>
                    </div>
                    <div class="quatro-garrafas c-maroon-flush mr-20">4 Garrafas <br><br>
                        <div class="bg-white">
                        <img src="../assets/images/4garrafas.png">
                        </div>
                        <div class="label-4 c-black">4garrafas.png</div>
                    </div>
                    <div class="seis-garrafas c-maroon-flush mr-20">6 Garrafas <br><br>
                        <div class="bg-white">
                        <img src="../assets/images/6garrafas.png">
                        </div>
                        <div class="label-6 c-black">6garrafas.png</div>
                    </div>
                </section>
            </div>
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
  export default {
    components: {
      WineCard
    }
  }
</script>
