<template>
	<h1>Hvilket tall</h1>
	<form>
		<label for="inputGuess">Gjett tallet: </label>
		<input v-model.number="inputGuess" id="inputGuess"/>
		<button class="button" @click.prevent="postGuess">Gjett</button>
	</form>
	<div>Du gjettet sist: {{ lastGuess }}, dette er {{ result }}</div>
	<!--<div>Du har {{ guessLimit }} forsøk igjen.</div>-->
	<div>{{ guessCountMessage }} </div>
	<div><h2>Historikk</h2></div>
	<div>{{ log }}</div>
	<div> {{ resultMessage }} </div>
	<div v-if="showNameInput">
		<form>
			<label for="nameInput">Ditt navn: </label>
			<input type="text" v-model.trim="nameInput" id="nameInput"/>
			<button class="button" @click.prevent="enterHighScore">Legg inn</button>
		</form>
	</div>
	<div>{{ highScoresLong }}</div>
</template>

<script>
	export default {

		mounted() {
			this.randomNum = Math.ceil(1000*Math.random());
			console.log(this.randomNum);
			this.guessCountMessage = `Du har ${this.guessLimit} forsøk igjen`;
		},
		methods: {
			postGuess(event) {
				this.lastGuess = this.inputGuess;
				this.log.unshift(this.lastGuess);
				this.calculateHigherOrLower();
				this.guessLimit--;
				this.guessCountMessage = `Du har ${this.guessLimit} forsøk igjen`;
				if(this.guessLimit >= 0 && this.result == "riktig!") {
					this.resultMessage = `Du vant! Tallet var ${this.randomNum}`;
					this.enterHighScore();
				} else if (this.guessLimit <= 0) {
					this.resultMessage = `Du tapte! Tallet var ${this.randomNum}`;
				}
			},
			calculateHigherOrLower() {
				if (this.lastGuess > this.randomNum) {
					this.result = "høyere enn tallet.";
				} else if(this.lastGuess < this.randomNum) {
					this.result = "lavere enn tallet.";
				} else if (this.lastGuess === this.randomNum) {
					this.result = "riktig!";
				} else {
					this.result = "ikke et tall";
				}
			},

			enterHighScore() {
				this.showNameInput = true;
				//this.highScores.push(this.nameInput);
				//this.$emit("score-added", this.nameInput, this.guessLimit);
				this.highScoresLong.push({name: this.nameInput, guessesUsed: this.guessLimit})
				console.log( this.nameInput, this.guessLimit);
			},
		},

		data() {
			return {
				randomNum: 0,
				lastGuess: '_____',
				inputGuess: null,
				result: '',
				log: [],
				guessCountMessage: '',
				guessLimit: 10,
				highScores: [],
				showNameInput: false,
				nameInput: '',
				resultMessage: '',
				highScoresLong: [
					{
						name: "Ole", guessesUsed: 9
					},
					{
						name: "Job", guessesUsed: 2
					}
				]
			}
		}
	};
</script>

<style>
	
</style>