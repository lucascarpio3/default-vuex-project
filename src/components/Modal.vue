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
                  <li><input class="region-radio" type="radio"/>Roraima (RR)</li>
                  <li><input class="region-radio" type="radio"/>Amazonas (AM)</li>
                  <li><input class="region-radio" type="radio"/>Amapá (AP)</li>
                  <li><input class="region-radio" type="radio"/>Pará (PA)</li>
                  <li><input class="region-radio" type="radio"/>Tocantins (TO)</li>
                  <li><input class="region-radio" type="radio"/>Acre (AC)</li>
                  <li><input class="region-radio" type="radio"/>Amazonas (AM)</li>
                </ul>
              </div>
              <div class="region">
                <label>Nordeste</label><br>
                <ul>
                  <li><input class="region-radio" type="radio"/>Maranhão (BA)</li>
                  <li><input class="region-radio" type="radio"/>Piauí (PI)</li>
                  <li><input class="region-radio" type="radio"/>Ceará (CE)</li>
                  <li><input class="region-radio" type="radio"/>Rio Grande do Norte (RN)</li>
                  <li><input class="region-radio" type="radio"/>Pernambuco (PE)</li>
                  <li><input class="region-radio" type="radio"/>Paraíba (PB)</li>
                  <li><input class="region-radio" type="radio"/>Sergipe (SE)</li>
                  <li><input class="region-radio" type="radio"/>Alagoas (AL)</li>
                  <li><input class="region-radio" type="radio"/>Bahia (BA)</li>
                </ul>
              </div>
              <div class="region">
                <label>Centro-Oeste</label><br>
                <ul>
                  <li><input class="region-radio" type="radio"/>Mato Grosso (MT)</li>
                  <li><input class="region-radio" type="radio"/>Mato Grosso do Sul (MS)</li>
                  <li><input class="region-radio" type="radio"/>Goiás (GO)</li>
                </ul>
              </div>
              <div class="region">
                <label>Sudeste</label><br>
                <ul>
                  <li><input class="region-radio" type="radio"/>São Paulo (SP)</li>
                  <li><input class="region-radio" type="radio"/>Rio de Janeiro (RJ)</li>
                  <li><input class="region-radio" type="radio"/>Espírito Santo (ES)</li>
                  <li><input class="region-radio" type="radio"/>Minas Gerais (MG)</li>
                </ul>
              </div>
              <div class="region">
                <label>Sul</label><br>
                <ul>
                  <li><input class="region-radio" type="radio">Paraná (PR)</li>
                  <li><input class="region-radio" type="radio">Rio Grande do Sul (RS)</li>
                  <li><input class="region-radio" type="radio">Santa Catarina (SC)</li>
                </ul>
              </div>
              <div class="region">
                <label>Distrito Federal</label><br>
                <li><input class="region-radio" type="radio">Distrito Federal</li>
              </div>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button @click="openModal()"
                      class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-50">SALVAR
              </button>
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
