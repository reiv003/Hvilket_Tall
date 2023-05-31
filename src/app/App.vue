<template>
    <header><RouterLink to="/"><button aria-label="Hjem"><img src="/assets/images/brevpapirlogo.svg"/></button></RouterLink></header>
    <RouterView />
    <footer>Sitrus Forlag © 2023</footer>
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