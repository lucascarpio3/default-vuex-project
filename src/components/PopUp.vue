<template type="text/x-template" id="popup-template">
    <transition name="modal-popup">
        <div class="modal-mask-popup">
            <div class="modal-wrapper-popup">
                <div class="modal-container-popup">
                    <div class="modal-header-popup pl-30">
                        <slot name="header-popup">
                            {{titleNot}}
                        </slot>
                    </div>
                    <div class="modal-footer-popup pt-20">
                        <slot name="footer-popup">
                            <button class="btn btn--flat btn-default bkg-white c-maroon-flush br-15 mt-30" @click="closeModal"
                                    style="border: 1px solid">
                                {{btnCancel}}
                            </button>
                            <button class="btn btn--flat btn-default bkg-shiraz c-white br-15 mt-30" @click="">
                                {{btnAction}}
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
    },
    props: {
      titleNot: {
        type: String,
        required: true
      },
      btnCancel: {
        type: String,
        required: true
      },
      btnAction: {
        type: String,
        required: true
      }
    }
  }
</script>
