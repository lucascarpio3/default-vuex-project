<template>
     <div class="month-freight pt-20 pl-140">
         <div class="locais">
         <label>Locais</label><br>
             <textarea name="" id="" cols="14" rows="4">PR, RS, SC, SP, RJ, MG, ES</textarea>
             <textarea name="" id="" cols="14" rows="4">MS</textarea>
             <textarea name="" id="" cols="14" rows="4">DF</textarea>
             <textarea name="" id="" cols="14" rows="4">BA, GO, MT, TO</textarea>
             <textarea name="" id="" cols="14" rows="4">AC, AL, MA, PB, PE, PI, RN, RO, SE</textarea>
             <textarea name="" id="" cols="14" rows="4">AM, AP, CE, PA, RR</textarea>
         </div>
         <div class="precos pt-50">
             <PlanTabPrice></PlanTabPrice>
             <button class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-50 position--absolute">SALVAR
             </button>
         </div>
     </div>
</template>

<script>
    import PlanTabPrice from 'components/PlanTabPrice'
    export default {
      components: {
        PlanTabPrice
      }
    }
</script>
