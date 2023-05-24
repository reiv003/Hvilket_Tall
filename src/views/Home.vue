<template>
	<h1>Hvilket tall</h1>
	<div>Gjett hvilket tall. Tallet er tilfeldig generert mellom 1 og 1000, og du har 10 forsøk på å gjette riktig. For hvert forsøk får du vite om tallet du har gjettet er høyere eller lavere enn det riktige tallet. Prøv å gjett riktig på så få forsøk som mulig!</div>
	<div><a href="#">Se high scores her!</a></div>
	<RouterLink to="/spill"><button class="button">Start</button></RouterLink>
</template>

<script>
	//import Sample from "../components/Sample.vue";

	export default {
		/*components: {
			Sample,
		}*/
	};
</script>

<style>
	
</style>