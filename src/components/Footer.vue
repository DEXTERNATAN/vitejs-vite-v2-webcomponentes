<template>
  <footer class="br-footer pt-3 pb-5" id="footer">
    <div class="container-fluid">
      <div class="info">
        <div class="text-down-01 text-medium pb-3">
          {{ license }}&nbsp;<strong><a href="">licença de uso</a>.</strong>
        </div>
      </div>
    </div>
  </footer>
  <!-- <br-footer
    :text="license"
    :logo="JSON.stringify(logo)"
    id="footer"
    container-fluid="true"
  ></br-footer> -->
</template>

<script setup lang="ts">
const license: string = "Texto destinado a exibição de informações relacionadas à";
</script>
