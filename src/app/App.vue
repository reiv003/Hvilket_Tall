<template>
  <header><RouterLink to="/"><button aria-label="Hjem">logo</button></RouterLink></header>
  <RouterView />
  <footer>(c) Sitrus Forlag</footer>
</template>

<script>
  export default {
	  
  };
</script>

<style>
  @import "../styles/reset.css";
  @import "../styles/variables.css";
  @import "../styles/fonts.css";
  @import "../styles/style.css";
</style>