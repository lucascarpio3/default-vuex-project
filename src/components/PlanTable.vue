<template>
  <div>
    <div class="plantable">
      <table>
        <tbody>
        <tr>
          <td><strong>Valores por quantidade de garrafas x categorias</strong></td>
          <td><strong>Explorador</strong></td>
          <td><strong>Seleção</strong></td>
          <td><strong>Jóias</strong></td>
        </tr>
        <tr>
          <td>Trocando 100 km</td>
          <td>Sem troca de km (+20%)</td>
          <td>Trocando 100 km</td>
          <td>Sem troca de km (+20%)</td>
        </tr>
        <tr>
          <td>DUAS GARRAFAS</td>
          <td>R$ 119</td>
          <td>R$ 143</td>
          <td>R$ 199</td>
        </tr>
        <tr>
          <td>QUATRO GARRAFAS</td>
          <td>R$ 239</td>
          <td>R$ 287</td>
          <td>R$ 399</td>
        </tr>
        <tr>
          <td>SEIS GARRAFAS</td>
          <td>R$ 359</td>
          <td>R$ 431</td>
          <td>R$ 599</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
  export default {}
</script>

<style>
  .plantable table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  .plantable td, th {
    border: 1px solid #EAEAEA;
    padding: 8px;
  }

  .plantable strong {
    color: #8D8684;
  }
</style>
