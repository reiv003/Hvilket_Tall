<template>
	<div class="game__container">
		<h1>Hvilket tall?</h1>
		<div class="guess__container">
			<form class="guessForm">
				<label for="inputGuess">Gjett tallet: </label>
				<input v-model.number="inputGuess" id="inputGuess"/>
				<button class="button" @click.prevent="postGuess">Gjett</button>
			</form>
			<div class="gameStatus">
				
				<!--<div>Du har {{ guessLimit }} forsøk igjen.</div>-->
				<div>{{ guessCountMessage }} </div>
			</div>
			<div class="winningResult">
			<div class="resultMessageText" id="resultMessage"> {{ resultMessage }} </div>
			<div v-if="showNameInput">
				<form>
					<label for="nameInput">Ditt navn: </label>
					<input type="text" v-model.trim="nameInput" id="nameInput"/>
					<button class="button" @click.prevent="enterHighScore">Legg inn</button>
				</form>
			</div>
		</div>
		</div>
		<div class="text-box__label">Historikk</div>
		<div class="guessLog">
			
			<div class="text-box">
				<div class="lastGuessResult">Du gjettet sist: <span>{{ lastGuess }}</span>, dette er {{ result }}</div>
				<h2>Gjetninger så langt</h2>
				<ol>
					<li v-for="guess in guesses">
						{{ guess }}
					</li>
				</ol>
				<button class="warning-button" @click="restartGame">Start på nytt</button>
			</div>
		</div>
		<div class="highScores">{{ highScoresLong }}</div>
	</div>
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
				this.guesses.unshift(this.lastGuess);
				this.calculateHigherOrLower();
				this.guessLimit--;
				this.guessCountMessage = `Du har ${this.guessLimit} forsøk igjen`;
				if(this.guessLimit >= 0 && this.result == "riktig!") {
					this.resultMessage = `Du vant! Tallet var ${this.randomNum}.`;
					this.enterHighScore();
				} else if (this.guessLimit <= 0) {
					this.resultMessage = `Du tapte! Tallet var ${this.randomNum}.`;
					var messageColor = document.getElementById("resultMessage");
					messageColor.classList.add("wrong-error-text");
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
					this.result = "ikke et tall.";
				}
			},

			enterHighScore() {
				this.showNameInput = true;
				//this.highScores.push(this.nameInput);
				//this.$emit("score-added", this.nameInput, this.guessLimit);
				this.highScoresLong.push({name: this.nameInput, guessesUsed: this.guessLimit})
				console.log( this.nameInput, this.guessLimit);
			},

			restartGame() {
				window.location.reload();
			}
		},

		data() {
			return {
				randomNum: 0,
				lastGuess: '_____',
				inputGuess: null,
				result: '_____.',
				guesses: [],
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