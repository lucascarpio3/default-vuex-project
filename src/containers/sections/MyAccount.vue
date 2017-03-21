<template>
    <section class="my-account pt-20 pl-40">
        <strong class="label-admin pt-50">Usuário Admin</strong><br><br><br><br>
        <strong class="label-changepass">Alterar Senha</strong>
        <div class="form-change-password pt-10">
            <div class="password pt-20">
                <strong class="second-label">Senha Antiga</strong>
                <input type="text" class="input-password"/>
            </div>
            <div class="password pt-20">
                <strong class="second-label">Nova Senha</strong>
                <input type="text" class="input-password"/>
            </div>
            <div class="password pt-20">
                <strong class="second-label">Confirmar Senha</strong>
                <input type="text" class="input-password"/>
                <div class="button-save">
                    <button @click="openModal()" class="btn btn--flat btn-default bkg-shiraz c-white br-15 mt-30">SALVAR</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {}
</script>

<style>
    .form-change-password {
        display: flex;
    }
    .input-password {
        width: 80%;
    }
    .button-save {
        padding-left: 78px;
        margin-top: -10px;
    }
    .label-admin {
        font-size: 16px;
       color: #B15F73;
    }
    .label-changepass {
        font-size: 16px;
        color: #505050;
    }
    .second-label {
        color: #CE4D6F;
    }
</style>
