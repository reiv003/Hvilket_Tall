<template>
	<div class="home__container">
		<h1>Hvilket tall?</h1>
		<div class="text-box__label">Instruks</div>
		<div class="text-box">
			<p>Gjett hvilket tall. Tallet er tilfeldig generert mellom 1 og 1000, og du har 10 forsøk på å gjette riktig. For hvert forsøk får du vite om tallet du har gjettet er høyere eller lavere enn det riktige tallet. Prøv å gjett riktig på så få forsøk som mulig!</p>
			<div>🏆 <RouterLink to="/high-scores">Se high scores her!</RouterLink></div>
		</div>
		
		<RouterLink to="/spill"><button class="start-button">Start</button></RouterLink>
	</div>
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