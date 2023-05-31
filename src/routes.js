import Home from './views/Home.vue';
import Game from './views/Game.vue';
import HighScores from './views/HighScores.vue'

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'game', path: '/spill', component: Game },
	{ name: 'highscores', path: '/high-scores', component: HighScores }
]
