<template type="text/x-template" id="modal-template">
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <label>Selecione os locais</label><br><br>
                        </slot>
                        <div class="header-x">
                            <a class="modal-default-button " @click="closeModal">
                                X
                            </a>
                        </div>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <div class="region">
                                <label>Norte</label><br>
                                <ul>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Amazonas (AM)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Roraima (RR)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Amapá (AP)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Pará (PA)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Tocantins (TO)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Acre (AC)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Amazonas (AM)</li>
                                </ul>
                            </div>
                            <div class="region">
                                <label>Nordeste</label><br>
                                <ul>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Maranhão (BA)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Piauí (PI)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Ceará (CE)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Rio Grande do Norte (RN)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Pernambuco (PE)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Paraíba (PB)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Sergipe (SE)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Alagoas (AL)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Bahia (BA)</li>
                                </ul>
                            </div>
                            <div class="region">
                                <label>Centro-Oeste</label>
                                <ul>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Mato Grosso (MT)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Mato Grosso do Sul (MS)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Goiás (GO)</li>
                                </ul>
                            </div>
                            <div class="region">
                                <label>Sudeste</label>
                                <ul>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">São Paulo (SP)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Rio de Janeiro (RJ)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Espírito Santo (ES)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Minas Gerais (MG)</li>
                                </ul>
                            </div>
                            <div class="region">
                                <label>Sul</label>
                                <ul>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Paraná (PR)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Rio Grande do Sul (RS)</li>
                                    <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Santa Catarina (SC)</li>
                                </ul>
                            </div>
                            <div class="region">
                                <label>Distrito Federal</label>
                                <li><input class="region-radio" type="radio" id="one" value="" v-model="picked">Distrito Federal</li>
                            </div>
                        </slot>
                    </div>
                    <div class="modal-footer pt-70 pl-100">
                        <slot name="footer">
                            <button @click="openModal()" class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-50">SALVAR</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      closeModal () {
        this.$emit('closeModal')
      }
    }
  }
</script>
